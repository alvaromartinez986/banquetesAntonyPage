import { Component, OnInit } from '@angular/core';
import { MenusService, Menu } from '../../services/menus.service';

@Component({
  selector: 'app-menus-div',
  templateUrl: './menus-div.component.html',
  styleUrls: ['./menus-div.component.css']
})
export class MenusDivComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(
    private _menusService:MenusService,
    private router:Router
  ) { }

  ngOnInit() {
  }

}
