import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from 'src/shared/services/auth.service';

import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  const testUser = {
    bio: 'test',
    email: 'test',
    image: 'test',
    username: 'test',
    token: 'test'
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ FormsModule, ReactiveFormsModule],
      providers: [{
        provide: AuthService, useValue: {
          getUser: () => of(testUser)
        }
      }],

      declarations: [SettingsComponent],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method getUser', () => {
    const service = TestBed.inject(AuthService);
    const spy = spyOn(service, 'getUser').and.callThrough();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  })
});
