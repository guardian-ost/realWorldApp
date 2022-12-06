import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserRegister, UserResponse } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API: string = 'https://api.realworld.io/api';
  public user!: User;
  public formMessage!: string;
  constructor(public http: HttpClient, private router: Router) { }

  public register(User: UserRegister) {
    this.http.post<UserResponse>( `${this.API}/users`, User).subscribe({
      next: (response) => { this.formMessage = 'Registration Successful';
      this.user = response.user;
      setTimeout( () => this.router.navigateByUrl('/home'), 3000);
    },
      error: (error: any) => {this.formMessage = error.message}
    });
  }


  public login(User: UserRegister) {
    this.http.post<UserResponse>( `${this.API}/users/login`, User).subscribe({
      next: (response) => { this.formMessage = 'Login Successful';
      this.user = response.user;
      setTimeout( () => this.router.navigateByUrl('/home'), 3000);
    },
      error: (error: any) => {this.formMessage = error.message}
    });
  }
  

  getUser(): Observable<{user: User}> {
    return this.http.get<{user: User}>(`${this.API}/user`, {
      headers: {Authorization: `Token ${this.user?.token}`}
    })
  }
}
