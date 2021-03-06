import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <button (click)="goBack()">Back</button>
    <button (click)="save()">Save</button>
  </div>
  `,
  styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero|undefined;
    constructor(private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location){}
      
    ngOnInit(): void {
        this.route.paramMap.
          switchMap((params: ParamMap) => {
              let id = params.get('id');
              if(id){
                return this.heroService.getHero(+id);
              }
              else{
                return this.heroService.getHero(0);
              }
            }
          )
          .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
      this.location.back();
    }
    save(): void {
      if(this.hero){
        this.heroService.update(this.hero)
        .then(() => this.goBack());
      }
    }
}