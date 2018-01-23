import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {

  private menus:Menu[] = [
    {
      name : "Gourmet",
      type : "(1 Carne)",
      description: "",
      image: "assets/img/1Carne.jpg"
    }
  ]

  constructor() { }

}


export interface Menu{
  name:string;
  type:string;
  description:string;
  image:string
}
