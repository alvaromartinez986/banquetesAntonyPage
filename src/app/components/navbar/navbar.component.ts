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
      const componentPosition = this.el.nativeElement;
      let scrollPosition = window.pageYOffset;
      this.fixed = scrollPosition >= 300;
    }
}
