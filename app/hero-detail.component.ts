/**
 * Created by xie on 2016/7/29.
 */
import {Component, Input, Output} from "@angular/core";
import {Hero} from "./hero";
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {ajaxGet} from "rxjs/observable/dom/AjaxObservable";

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
</div>
`
})

export class HeroDetailComponent {
  @Input()
  hero:Hero;

  @Input()
  subName:string;


  @Output()
  ageChange:EventEmitter<number> = new EventEmitter();

  /*onChange() {
    this.ageChange.emit(this.age);
  }*/
}

export class MyComp {
  @Input() myText:string;
  @Output() myTextChange:EventEmitter<string> = new EventEmitter();

  // To notify the parent of changes, whenever the value of myText changes, emit an event.
  onChange(newMyText:string) {
    this.myTextChange.emit(newMyText);
  }
}
