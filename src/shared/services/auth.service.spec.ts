import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { AuthService } from './auth.service';

const testUser = {
  bio: 'test',
  email: 'test',
  image: 'test',
  username: 'test',
  token: 'test'
}
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient, useValue: {
            get: () => of({ user: testUser }),
            post: () => of({ user: testUser })
          }
        },
        {provide: Router, useValue: {
          navigateByUrl: () => true
        }}
      ],      
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user', waitForAsync(() => {
    const http = TestBed.inject(HttpClient);
    const spy = spyOn(http, 'get').and.callThrough();
    const result = service.getUser();

    expect(spy).toHaveBeenCalled();
    result.subscribe(response => {
      expect(response).toEqual({ user: testUser })
    });

  }));

  it('should return "Registration Successful" when registered', waitForAsync(() => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'post').and.callThrough();
    service.register({
      user: {
        username: 'test',
        email: 'test',
        password: 'test'
      }
    });
    expect(spy).toHaveBeenCalled();
    expect(service.formMessage).toEqual('Registration Successful')
  }));

  it('should set user field as when login', waitForAsync(() => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'post').and.callThrough();
    service.login({
      user: {
        email: 'test',
        password: 'test'
      }
    });
    expect(spy).toHaveBeenCalled();
    expect(service.user).toEqual(testUser);
  }));

  it('should get user', waitForAsync(() => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'get').and.callThrough();
    const result = service.getUser();
    expect(spy).toHaveBeenCalled();
    result.subscribe(res => expect(res).toEqual({user: testUser}))
  }));
});
