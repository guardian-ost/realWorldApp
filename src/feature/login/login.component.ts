import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { UserRegister } from 'src/shared/types';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signInForm!: FormGroup;
  constructor(public readonly auth: AuthService) {

  }


  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      token: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  public submit(): void {
    const User: UserRegister = {
      user: {
        email: this.signInForm.value.email,
        password: this.signInForm.value.token
      }
    }
    this.auth.login(User);
    this.signInForm.reset();
  }


}
