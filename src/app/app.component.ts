import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <div class="nav-wrapper deep-orange">
      <a href="#" class="brand-logo center"><img src="/assets/banana-logo.png"/></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a routerLink="/about">About</a></li>
        <li><a href="/bananas">Bananas</a></li>
        <li><a href="/request-bananas">Request Bananas</a></li>
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'app works!';
}
