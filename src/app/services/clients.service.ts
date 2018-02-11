import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {

  private clients:Client[] = [
    {
      name : "",
      url : "http://acecolombia.org/acecolombia/",
      image: "assets/img/companies/acecolombia.png"
    },
    {
      name : "",
      url : "http://www.colgate.com.co/es/co/oc/",
      image: "assets/img/companies/Colgate_Palmolive.gif"
    },
    {
      name : "",
      url : "https://www.facebook.com/eventos.orioncali/",
      image: "assets/img/companies/eventos_orion.gif"
    },
    {
      name : "",
      url : "http://tubosyperfilesfanalca.com/",
      image: "assets/img/companies/fanalca.jpg"
    },
    {
      name : "",
      url : "http://www.calieventos.com/la-hacienda.html",
      image: "assets/img/companies/la_hacienda.png"
    },
    {
      name : "",
      url : "http://novatecfs.com/",
      image: "assets/img/companies/nfs.png"
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
