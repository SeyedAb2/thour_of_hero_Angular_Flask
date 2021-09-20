import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  id?:number;
  constructor(private router:ActivatedRoute,private HeroService:HeroService,private location:Location) { }
  ngOnInit() {
    this.getHero()
  }
  getHero(): void {
    const id = Number(this.router.snapshot.params['id'])
    this.HeroService.getHeroById(id).subscribe(
      (param) =>{
        this.hero = param
      }
    )
  }
  goBack(): void {
    this.location.back();
  }
  updateHero(){
    if(this.hero){
      this.HeroService.update(this.hero).subscribe(
        // (hero:Hero) =>{
        //   this.hero = hero
        // }
      )
    }
  }
}
