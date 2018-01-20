import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: Document) { }

  ngOnInit() {
  }

 @HostListener("window:scroll", [])
 onWindowScroll() {
    let num = this.doc.body.scrollTop;
    if ( num > 50 ) {
        this.fixed = true;
    }else if (this.fixed && num < 5) {
        this.fixed = false;
    }
 }

}
