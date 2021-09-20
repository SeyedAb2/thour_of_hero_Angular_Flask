import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { Hero } from './hero';
import { MassageService } from './massage.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MassageService,private httpClient: HttpClient) { }

  getHeroes():Observable<Hero[]>{
      const heroes = this.httpClient.get<Hero[]>("http://127.0.0.1:5000/heroes");
      this.messageService.add('HeroService: fetched heroes');
      return heroes
  }
  getHeroById(id: number): Observable<Hero> {
    const hero = this.httpClient.get<Hero>("http://127.0.0.1:5000/detail/"+id.toString());
      this.messageService.add('HeroService: fetched The hero by id :' + id.toString());
      return hero
  }
  update(hero:Hero):Observable<Hero> {
    return this.httpClient.post<Hero>('http://127.0.0.1:5000/update',hero)
  }
}
