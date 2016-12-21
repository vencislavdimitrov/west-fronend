import './rxjs-extensions';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {UsersComponent} from './users.component';
import {UserService} from './user.service';
import {OrderBy} from './orderBy'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2BootstrapModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    OrderBy
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
