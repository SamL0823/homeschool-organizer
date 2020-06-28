import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firebase error handle

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
         this.router.navigate(['/userinfo'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email, password) {
    if (email.length === 0) {
      this.errorMessage = "Please Enter Email";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "Please Enter Password";
      return false;
    }

    if (password.length  < 6) {
      this.errorMessage = "Password should be at least 6 characters";
      return false;
    }

    this.errorMessage = '';
    return true;

  }


}