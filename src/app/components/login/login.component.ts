import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  failedLogin:boolean  = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService:UserService
  ) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.valid){
      this.userService.loginUser(this.loginForm.value)
      .subscribe(
      data => {
          console.log(data.token);
          this.userService.currentUser = true;
          this.router.navigate(['home'])
      },
      error => {
        console.log(error);
        this.failedLogin = true
      });
    }  
}

}
