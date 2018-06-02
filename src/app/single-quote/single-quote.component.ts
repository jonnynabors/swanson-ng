import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-quote',
  template: `
    <h1>
      {{quotes}}
    </h1>
  `,
  styles: []
})
export class SingleQuoteComponent implements OnInit {
  public quotes: string[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.showQuote();
  }

  showQuote() {
    this.apiService.getSingleQuote().subscribe(result => {
      this.quotes = result as string[];
    });
  }
}
