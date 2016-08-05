/**
 * Created by xie on 2016/7/29.
 */
import {Component, Input, Output, OnInit, OnDestroy} from "@angular/core";
import {Hero} from "./hero";
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {ajaxGet} from "rxjs/observable/dom/AjaxObservable";
import {HeroService} from "./hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'my-hero-detail',
  template: `
<div *ngIf="hero">
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </div>
  <div>
    <label>hero sub name: </label>
    <input [(ngModel)]="subName" placeholder="Hero Sub Name" />
  </div>
  <button (click)="goBack()">Back</button>
</div>
`
})

export class HeroDetailComponent implements OnInit, OnDestroy{
  ngOnInit(): any {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
    return undefined;
  }

  ngOnDestroy(): any {
    this.sub.unsubscribe();
  }

  constructor(private heroService:HeroService, private route: ActivatedRoute) {
  }
  hero: Hero;
  sub:any;

  @Output()
  ageChange:EventEmitter<number> = new EventEmitter<number>();

  /*onChange() {
    this.ageChange.emit(this.age);
  }*/

  goBack(){
    window.history.back();
  }
}

export class MyComp {
  @Input() myText:string;
  @Output() myTextChange:EventEmitter<string> = new EventEmitter<string>();

  // To notify the parent of changes, whenever the value of myText changes, emit an event.
  onChange(newMyText:string) {
    this.myTextChange.emit(newMyText);
  }
}
