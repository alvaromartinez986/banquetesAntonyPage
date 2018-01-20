import { Component, OnInit,  HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public fixed: boolean = false;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      let componentPosition = this.el.nativeElement;
      let scrollPosition = window.pageYOffset;
      console.log(componentPosition);

      if (scrollPosition >= 300) {
        this.fixed = true;
      } else {
        this.fixed = false
      }

    }

}
