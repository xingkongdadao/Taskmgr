import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../domain/quote.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/quote.action';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  // quote: Quote = {
  //   cn: '网络不通',
  //   en: 'can not get message',
  //   pic: 'assets/img/quote_fallback.jpg',
  // };

  quote$: Observable<Quote>;

  constructor(private fb: FormBuilder,
              private store$: Store<fromRoot.State>,
              private quoteService$: QuoteService, ) {
    // 先得到state
    this.quote$ = this.store$.select(state => state.quote.quote);
    // 传递消息
    this.quoteService$
      .getQuote()
      .subscribe(q => {
        this.store$.dispatch(new actions.QuoteSuccessAction(q));
      });
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
























