import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroSlideComponent } from './components/intro-slide/intro-slide.component';
import { ServiceDivComponent } from './components/service-div/service-div.component';
import { MenusDivComponent } from './components/menus-div/menus-div.component';

//Services
import { MenusService } from './services/menus.service';


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
  providers: [
    MenusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
