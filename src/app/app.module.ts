import 'zone.js';
import 'reflect-metadata';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule }    from '@angular/http';

import { HeroService } from './hero.service';
import { EigoMondaiService } from './eigo-mondai/eigo-mondai.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { DashboardComponent } from './dashboard.component'
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import {HeroSearchComponent} from './hero-search.component';
import { EigoMondaiComponent } from './eigo-mondai/eigo-mondai.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    EigoMondaiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,    
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}), 
    AppRoutingModule
  ],
  providers: [HeroService, EigoMondaiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

