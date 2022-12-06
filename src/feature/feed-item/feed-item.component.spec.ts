import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TruncatePipe } from 'src/shared/pipes/truncate.pipe';

import { FeedItemComponent } from './feed-item.component';

describe('FeedItemComponent', () => {
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;

  const testArticle = {
    slug: 'test',
    title: 'test',
    description: 'test',
    body: 'test',
    tagList: [],
    createdAt: Date(),
    updatedAt: Date(),
    favorited: true,
    favoritesCount: 10,
    author: {
      username: 'test',
      bio: 'test',
      image: 'test',
      following: true
    }
  } 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
           declarations: [ FeedItemComponent, TruncatePipe ],
           errorOnUnknownProperties: true,
           errorOnUnknownElements: true
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    component.article = testArticle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
