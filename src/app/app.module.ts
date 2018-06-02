import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SingleQuoteComponent } from './single-quote/single-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
