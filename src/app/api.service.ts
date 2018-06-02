import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public getSingleQuote() {
    return this.http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }

  public getNumberOfQuotes(quotesToGet: number) {
    return this.http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes/' + quotesToGet);
  }
}
