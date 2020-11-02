import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router,
              private userService:UserService
              ){
              }
  ngOnInit(){}
  logout() {
    this.router.navigate(['/login']);
    this.userService.currentUser = false;
}

}
