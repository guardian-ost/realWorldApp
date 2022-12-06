import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ FormsModule, ReactiveFormsModule],
      providers: [
        {provide: AuthService, useValue: {
          login: () => {}
        }}
      ],
      declarations: [ LoginComponent ],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called', () => {
    const service = TestBed.inject(AuthService);
    const spy = spyOn(service, 'login').and.callThrough();

    component.submit();
    expect(spy).toHaveBeenCalled();
  });
});
