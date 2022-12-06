import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/shared/services/auth.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ FormsModule, ReactiveFormsModule],
      providers: [
        {provide: AuthService, useValue: {
          register: () => {}
        }}
      ],
      declarations: [ RegisterComponent ],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called', () => {
    const service = TestBed.inject(AuthService);
    const spy = spyOn(service, 'register').and.callThrough();

    component.submit();
    expect(spy).toHaveBeenCalled();
  });
});
