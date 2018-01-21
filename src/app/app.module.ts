import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroSlideComponent } from './components/intro-slide/intro-slide.component';
import { ServiceDivComponent } from './components/service-div/service-div.component';
import { MenusDivComponent } from './components/menus-div/menus-div.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroSlideComponent,
    ServiceDivComponent,
    MenusDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
