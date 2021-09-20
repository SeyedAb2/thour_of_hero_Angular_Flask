import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MassageService } from '../massage.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[] = [] ;
  selectedHero?: Hero;
  onSelected(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero ${hero.name} id=${hero.id}`);
  }
  constructor(private Heroes: HeroService,private messageService: MassageService) { }
  getHeroes(){
    this.Heroes.getHeroes().subscribe(
      (heroes:Hero[]) => {
        this.heroes = heroes
      }
    )
  }
  ngOnInit(): void {
    this.getHeroes()
  }

}
