import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService:UserService
  ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          //name: ['', Validators.required],
          email: ['',Validators.required],
          username: ['',Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

  onSubmit() {

      this.submitted = true;
      this.userService.registerUser(this.registerForm.value)
      .subscribe(
        data => {
            this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        });
  }

}
