
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 obj: any = {};
 loginForm: FormGroup;
  errorMsg: string;
  constructor(private formBuilder:FormBuilder, private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:[''],
    });
  }

  login(){
    this.userService.httpSendRequestToLogin(this.obj).subscribe(
      (data) =>{
        console.log('response after login ', data);
        if (data.message != '2') {
            //display message error
            this.errorMsg = "please check your email/pwd"
        }
        else{
          localStorage.setItem('connectedUser',JSON.stringify(data.user));
          if (data.user.role == 'user') {
            this.router.navigate(['']);
          }
          else
          {
            this.router.navigate(['admin']);
          }
        }
      }
    )

  }



}
