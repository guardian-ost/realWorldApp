import { Component, OnInit } from '@angular/core';
import { testUser } from '../register/register.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user = testUser;
  constructor() { }

  ngOnInit(): void {
  }

}
