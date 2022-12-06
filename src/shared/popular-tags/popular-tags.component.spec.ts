import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTagsComponent } from './popular-tags.component';

describe('PopularTagsComponent', () => {
  let component: PopularTagsComponent;
  let fixture: ComponentFixture<PopularTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTagsComponent ],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should selected tag is "Test Tag"', () => {
    let result = '';
    component.selectTag.subscribe(res => result = res);
    component.sendSelectTag('Test Tag');
    expect(result).toBe('Test Tag')
  });
});
