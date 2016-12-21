import {Component} from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <h1>{{title}}</h1>
            <nav>
              <button routerLink="/dashboard" routerLinkActive="active" class="btn btn-primary">Dashboard</button>
              <button routerLink="/users" routerLinkActive="active" class="btn btn-primary">Users</button>
            </nav>
            <router-outlet></router-outlet>
        </div>
    </div>
  `
})
export class AppComponent {
  title = 'Demo application';
}
