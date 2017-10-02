import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Quote} from '../domain/quote.model';


@Injectable()
export class QuoteService {

  constructor(
    private http: Http,
    @Inject('BASE_CONFIG') private config
    ) { }

  getQuote(): Observable<Quote> {
    // const uri = '${this.config.uri}/quote/${Math.floor(Math.random()*10)}';
    const uri = this.config.uri + '/quotes/' + Math.floor(Math.random() * 10);
    return this.http.get(uri)
      .debug('quote: ')
      .map(res => res.json() as Quote);
  }

}
