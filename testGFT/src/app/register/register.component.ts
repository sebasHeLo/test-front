import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usr: any;
  data: any;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.usr = {};
  }

  registerUser( regFrm: FormGroup ) {
    this.registerService.addUser(this.usr).subscribe(
        data => {
        this.data = data;
        console.log(data);
      }
    );
    regFrm.reset();//Just in case of valid values
  }

}
