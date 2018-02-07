import { Component, OnInit } from '@angular/core';
import { ClientsService, Client } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[] = [];
  constructor(
    private _clientService:ClientsService
  ) { }

  ngOnInit() {
    this.clients = this._clientService.getClients();
  }

}
