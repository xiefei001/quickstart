import {RouterConfig, provideRouter} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
const routes:RouterConfig = [{
    path: 'heores',
    component: HeroesComponent
  }];
export const appRouterProviders = [provideRouter((routes))];
