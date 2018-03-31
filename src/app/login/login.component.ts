import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../assets/css/bootstrap.min.css', './../../assets/css/demo.min.css',
    './../../assets/css/font-awesome.min.css', './../../assets/css/lockscreen.min.css' ,'./../../assets/css/smartadmin-production-plugins.min.css' ,
    './../../assets/css/smartadmin-production.min.css','./../../assets/css/smartadmin-skins.min.css','./../../assets/css/smartadmin-rtl.min.css' ]
})
export class LoginComponent implements OnInit {

  formData;
  constructor() { }

  ngOnInit() {
    this.formData = new FormGroup({
      email : new FormControl("Email"),
      password : new FormControl()
    });
  }

}
