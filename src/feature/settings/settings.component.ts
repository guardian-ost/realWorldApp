import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { UserResponse } from 'src/shared/types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public settingsForm!: FormGroup;

  constructor(private auth: AuthService) {

  }


  ngOnInit(): void {
    this.auth.getUser().subscribe({
      next: (response: UserResponse) => {
        this.settingsForm.controls['userName'].setValue(response.user.username);
        this.settingsForm.controls['email'].setValue(response.user.email);
        this.settingsForm.controls['bio'].setValue(response.user.bio);
        this.settingsForm.controls['image'].setValue(response.user.image);
      },
      error: (e: HttpErrorResponse) => {
        throw new Error("Server Error");
      }
    }
    )

    this.settingsForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      bio: new FormControl(null, Validators.maxLength(100)),
      image: new FormControl(null),
      token: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }
  public submit(): void {
    console.log('Settings');
  }

}
