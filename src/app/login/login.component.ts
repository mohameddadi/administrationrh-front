import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from "@angular/router";
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  errorMessage:string;

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValue){
    console.log("formValue login !!! ");
    this.authService.logIn(formValue)
      .subscribe(data=>{
        this.router.navigate(['/home']);
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }
}
