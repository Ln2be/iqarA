import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthComponent } from './auth/auth.component';
import { AddComponent } from './add/add.component';
import { DetailedComponent } from './detailed/detailed.component';
import { SearchComponent } from './search/search.component';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthComponent,
    AddComponent,
    DetailedComponent,
    SearchComponent,
    ShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
