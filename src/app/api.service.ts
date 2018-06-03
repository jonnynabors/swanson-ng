import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  // TODO: Make this URL a constant
  public getSingleQuote(): Observable<string[]> {
    return this.http.get<string[]>('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }
}
