import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup } from '@angular/forms';
import { User } from './login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  user: any;
  data: any;
  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit() {
    this.user = {};
  }

  valite( frm: FormGroup ) {
    this.loginService.validateUser(this.user).subscribe(
      data => {
        this.data = data;
      },error => {
        alert("DATOS NO VALIDOS");
      },() => {
        parseJwt(this.data.token);
        console.log(localStorage);
        this.router.navigate(['content'])
      }
    );
  }
}
