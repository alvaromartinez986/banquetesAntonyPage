import { Component, OnInit } from '@angular/core';
import { MenusService, Menu } from '../../services/menus.service';

@Component({
  selector: 'app-modal-menus',
  templateUrl: './modal-menus.component.html',
  styleUrls: ['./modal-menus.component.css']
})
export class ModalMenusComponent implements OnInit {

  menus:Menu[] = [];

  constructor(
    private _menusService:MenusService
  ) { }

  ngOnInit() {
    this.menus = this._menusService.getMenus();
  }

}
