import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroSlideComponent } from './components/intro-slide/intro-slide.component';
import { ServiceDivComponent } from './components/service-div/service-div.component';
import { MenusDivComponent } from './components/menus-div/menus-div.component';

//Services
import { MenusService } from './services/menus.service';
import { ResumeService } from './services/resume.service';
import { ClientsService } from './services/clients.service';
import { ModalMenusComponent } from './components/modal-menus/modal-menus.component';
import { AboutUsDivComponent } from './components/about-us-div/about-us-div.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientsComponent } from './components/clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroSlideComponent,
    ServiceDivComponent,
    MenusDivComponent,
    ModalMenusComponent,
    AboutUsDivComponent,
    FooterComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    MenusService,
    ResumeService,
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
