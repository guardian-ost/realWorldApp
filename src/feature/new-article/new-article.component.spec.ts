import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewArticleComponent } from './new-article.component';

describe('NewArticleComponent', () => {
  let component: NewArticleComponent;
  let fixture: ComponentFixture<NewArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ FormsModule, ReactiveFormsModule],
      declarations: [ NewArticleComponent ],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
