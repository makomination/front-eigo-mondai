import { Component } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  title: string;
  heroes: Hero[];
  selectedHero: Hero | null;

  constructor(private heroService: HeroService){
    this.title = 'Tour of Heroes';
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(){
    this.getHeroes();  
  }
}
