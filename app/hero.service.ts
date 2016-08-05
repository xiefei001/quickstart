import {Injectable} from "@angular/core";
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
@Injectable()
export class HeroService {
  getHeroes() {
    return HEROES;
  }

  getHeroesSlowly(){
    return new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 5000));
  }

  getHero(id: number) {
    return this.getHeroesSlowly().then(heroes => heroes.find(hero => hero.id === id));
  }
}

