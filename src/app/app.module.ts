import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Http // <-- import the FormsModule before binding with [(ngModel)] 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
