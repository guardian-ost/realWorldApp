import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/shared/services/auth.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: AuthService, useValue: {
          user: {
            username: 'Test',
            image: 'Test'
          }
        }
      }],
      declarations: [ HeaderComponent ],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
