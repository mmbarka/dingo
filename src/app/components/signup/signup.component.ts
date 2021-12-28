import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  name: string;
  errorMsg: string;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(13)]]
    },
      {

        validator: MustMatch('password', 'confirmPassword')
      })
  }
  signup() {
    if (this.router.url == '/signupAdmin'){
      this.signupForm.value.role = 'admin';
    }
    else
    {
      this.signupForm.value.role = 'user';
    }
    
    this.userService.httpSendRequestToAddUser(this.signupForm.value).subscribe(
      (data) =>{
        if(data.code == '0'){
          
          this.errorMsg = 'email exists'
        }
        else
        {
          this.router.navigate(['login']);
          
        }        
      }
    );
  }
}
