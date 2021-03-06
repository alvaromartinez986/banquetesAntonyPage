import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {

  private menus:Menu[] = [
    {
      name : "Gourmet",
      type : "(1 Carne)",
      description: "Platos de comida gourmet con 1 carne: res, pollo o cerdo. Carne en diferentes estilos de salsa. Arroz especial. Variedad de ensaladas. Guarniciones o acompañantes.  Postre (opcional)",
      image: "assets/img/350x250/1Carne.jpg"
    },
    {
      name : "Asados",
      type : "",
      description: "Asados para ocasiones especiales. Filete de pollo, cerdo o res. Variedad de chorizos. Arepa. Papa con su salsa. Mazorca. Ensalada especial. Maduro.",
      image: "assets/img/350x250/Asados.png"
    },
    {
      name : "Gourmet",
      type : "(2 Carnes)",
      description: "Platos de comida gourmet con 2 carnes: res y pollo o cerdo y pollo. Carne en diferentes estilos de salsa. Arroz especial. Variedad de ensaladas. Guarniciones o acompañantes.  Postre (opcional)",
      image: "assets/img/350x250/2Carnes.jpg"
    },
    {
      name : "Desayunos",
      type : "",
      description: "Desayunos gourmet o tradicionales para sus reuniones especiales. Variedad de menús que incluyen: bebidas calientes, bebidas frías, frutas, huevo en diferentes estilos, acompañante, tipos de tortillas, quesos, etc.",
      image: "assets/img/350x250/Desayunos.jpg"
    },
    {
      name : "Refrigerios",
      type : "",
      description: "Refrigerios para eventos en la mañana o tarde. Tortillas, sandwich, frutas, jugos, panes, postres, típicos, gourmet, etc. Menús prácticos para comidas en medio de la mañana o tarde.",
      image: "assets/img/350x250/Refrigerios.jpg"
    },
    {
      name : "Pasabocas",
      type : "",
      description: "Pasabocas fríos y calientes según su gusto o tipo de reunión. Se puede combinar con el plato de comida principal. Opciones atractivas y ecónomicas para variar en sus eventos sociales.",
      image: "assets/img/350x250/Pasabocas.jpg"
    },
    {
      name : "Arroces",
      type : "",
      description: "Variedad de platos de arroz con ingredientes especiales. Arroz con diferentes estilos: verde, amarillo, café, rojo. Arroz campesino. Arroz con finas hierbas. Arroz con ajonjolí. Arroz con nueces. Etc.",
      image: "assets/img/350x250/Arroces.jpg"
    },
    {
      name : "Criolla",
      type : "",
      description: "Platos típicos de diferentes regiones del país. Variedad de menús caseros y tradicionales Colombianos.",
      image: "assets/img/350x250/Criolla.jpg"
    },
    {
      name : "Pastas",
      type : "",
      description: "Platos variados con pasta corta o larga, salsas de variedad de quesos, carnes y opciones vegetarianas. También lasagna de diferentes estilos.",
      image: "assets/img/350x250/Pasta.jpg"
    },
  ]

  constructor() { }

  getMenus():Menu[] {
    return this.menus;
  }
}

export interface Menu{
  name:string;
  type:string;
  description:string;
  image:string
}
