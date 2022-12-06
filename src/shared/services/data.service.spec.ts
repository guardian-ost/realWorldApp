import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { testUser } from 'src/feature/register/register.component';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  const testArticle = {
    slug: 'test',
    title: 'test',
    description: 'test',
    body: 'test',
    tagList: [],
    createdAt: 'test',
    updatedAt: 'test',
    favorited: true,
    favoritesCount: 10,
    author: {
      username: 'test',
      bio: 'test',
      image: 'test',
      following: true
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient, useValue: {
            get: () => of({ user: testUser })
          }
        }
      ],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return tags', waitForAsync(() => {
    const http = TestBed.inject(HttpClient);
    const spy = spyOn(http, 'get').and.returnValue(of({tags: []}))
    const result = service.getTags();

    expect(spy).toHaveBeenCalledOnceWith('https://api.realworld.io/api/tags');
    result.subscribe(response => {
      expect(response).toEqual([]);
    });

  }));

  it('should return article', waitForAsync(() => {
    const http = TestBed.inject(HttpClient);
    const spy = spyOn(http, 'get').and.returnValue(of({articles: [testArticle]}));
    const result = service.getArticles();

    expect(spy).toHaveBeenCalledOnceWith('https://api.realworld.io/api/articles?limit=10&offset=0');
    result.subscribe(response => {
      expect(response).toEqual([testArticle]);
    });

  }));
});
