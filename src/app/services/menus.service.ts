import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {

  private menus:Menu[] = [
    {
      name : "Gourmet",
      type : "(1 Carne)",
      description: "",
      image: "assets/img/1Carne.jpg"
    },
    {
      name : "Gourmet",
      type : "(2 Carnes)",
      description: "",
      image: "assets/img/2Carnes.jpg"
    },
    {
      name : "Arroces",
      type : "",
      description: "",
      image: "assets/img/Arroces.jpeg"
    },
    {
      name : "Desayunos",
      type : "",
      description: "",
      image: "assets/img/1Carne.jpg"
    },
    {
      name : "Refrigerios",
      type : "",
      description: "",
      image: "assets/img/refrigerios.jpeg"
    },
    {
      name : "Pasabocas",
      type : "",
      description: "",
      image: "assets/img/pasabocas.jpg"
    },
    {
      name : "Pastas",
      type : "",
      description: "",
      image: "assets/img/pasta.jpg"
    },
    {
      name : "Criolla",
      type : "",
      description: "",
      image: "assets/img/criolla.jpeg"
    },

  ]

  constructor() { }

}


export interface Menu{
  name:string;
  type:string;
  description:string;
  image:string
}
