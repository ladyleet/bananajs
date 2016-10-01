import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bananas',
  template: `
  <div class="row">
    <div class="col s12">
      <h2 class="deep-orange-text center-align">Meet the B-A-N-A-N-A-S</h2>
    </div>
  </div>
  <div class="row">
  <div *ngFor="let banana of bananas" class="col s12 m4 l2">
      <div class="card">
        <div class="card-image">
          <img src="assets/{{banana.picture}}">
          <span class="card-title">{{banana.firstName}} {{banana.lastName}}</span>
        </div>
        <div class="card-action">
          <a href="http://twitter.com/{{banana.twitter}}">@{{banana.twitter}}</a>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class BananasComponent implements OnInit {

  bananas: Object[] = [
      { firstName: 'Matt', lastName: 'Zabriskie', twitter: 'mzabriskie', picture: 'matt-zabriskie.jpg' },
      { firstName: 'Ben', lastName: 'Lesh', twitter: 'benlesh', picture: 'ben-lesh.jpg' },
      { firstName: 'Dean', lastName: 'Hume', twitter: 'deanohume', picture: 'dean-hume.png' },
      { firstName: 'Pete', lastName: 'Bacon Darwin', twitter: 'petebd', picture: 'pete-bacon-darwin.jpg' },
      { firstName: 'Sam', lastName: 'Saccone', twitter: 'samccone', picture: 'sam-saccone.png' },
      { firstName: 'Tracy', lastName: 'Lee', twitter: 'ladyleet', picture: 'tracy-lee.jpg' },
      { firstName: 'Sarah', lastName: 'Drasner', twitter: 'sarah_edo', picture: 'sarah-drasner.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
