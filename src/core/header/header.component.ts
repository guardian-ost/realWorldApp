import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(public readonly auth: AuthService) { 
    
  }
  ngOnInit(): void {

  }
  isCollapsed = false;

  }
