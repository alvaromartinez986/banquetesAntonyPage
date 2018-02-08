import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {

  private clients:Client[] = [
    {
      name : "",
      url : "",
      image: "assets/img/companies/1.png"
    },
    {
      name : "",
      url : "",
      image: "assets/img/companies/2.jpg"
    },
    {
      name : "",
      url : "",
      image: "assets/img/companies/3.gif"
    },
    {
      name : "",
      url : "",
      image: "assets/img/companies/4.jpg"
    },
    {
      name : "",
      url : "",
      image: "assets/img/companies/5.png"
    },
    {
      name : "",
      url : "",
      image: "assets/img/companies/6.png"
    },
  ]

  constructor() { }

  getClients():Client[] {
    return this.clients;
  }
}

export interface Client{
  name:string;
  url:string;
  image:string
}
