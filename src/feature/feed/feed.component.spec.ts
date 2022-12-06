import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PopularTagsComponent } from 'src/shared/popular-tags/popular-tags.component';
import { DataService } from 'src/shared/services/data.service';

import { FeedComponent } from './feed.component';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: DataService, useValue: {
            getTags: () => of([]),
            getArticles: () => of([])
          }
        }
      ],
      declarations: 
      [FeedComponent,
        PopularTagsComponent
      ],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select tag Test', () => {
    component.selectedTag('Test');
    expect(component.selectTag).toBe('Test');
  })
});
