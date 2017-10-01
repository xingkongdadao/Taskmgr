import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['lijiang@gogotrans.com', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]

    });

    // this.form = new FormGroup({
    //   email: new FormControl('lijiang@gogotrans.com', Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    // });
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(valid);

  }

}
























