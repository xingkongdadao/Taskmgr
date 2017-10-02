import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../domain/quote.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote: Quote = {
    cn: '网络不通',
    en: 'can not get message',
    pic: 'assets/img/quote_fallback.jpg',
  };

  constructor(private fb: FormBuilder,
              private quoteService$: QuoteService, ) {
    this.quoteService$.getQuote()
      .subscribe(q => this.quote = q);
  }

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
























