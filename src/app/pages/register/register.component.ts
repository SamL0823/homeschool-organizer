import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email="";
  password="";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router:Router, private dataservice: DataService) { }

  ngOnInit(): void {
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

  register()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "Success"
          this.router.navigate(['/userinfo'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/register'])
        })
    }

  

    let user = new User(this.email);

    this.dataservice.create_NewUser(user).then(res => {
      this.email = "";
    })
    // console.log(user);
    // this.http.post('https://homeschool-organizer-942fc.firebaseio.com/Users.json', user);

  }

  validateForm(email, password)
  {
    if(email.length === 0)
    {
      this.errorMessage = "Please Enter Email";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "Please Enter Password";
      return false;
    }

    if (password.length < 6)
    {
      this.errorMessage = "Password should be at least 6 characters";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
