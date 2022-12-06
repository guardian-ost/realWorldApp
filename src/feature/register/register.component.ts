import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { User, UserRegister } from 'src/shared/types';




export const testUser: User = {
  bio: 'working',
  email: 'mail@mail.com',
  image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
  username: 'guardianost'
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  public signUpForm!: FormGroup;
  
  constructor(public auth: AuthService) {
  }


  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      token: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  public submit(): void {
    const User: UserRegister = {
      user: {
        username: this.signUpForm.value.userName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.token
      }
    }
    this.auth.register(User);
    this.signUpForm.reset();
  }
}