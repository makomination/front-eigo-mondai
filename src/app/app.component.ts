import { Component } from '@angular/core';
import { Hero } from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  heroes: Array<Hero>;
  myHero: Hero | null;

  constructor(){
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Makoto'),
      new Hero(2, 'Windstorm'),
      new Hero(3, 'Bombasto'),
      new Hero(4, 'Magneta'),
      new Hero(5, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  } 

}
