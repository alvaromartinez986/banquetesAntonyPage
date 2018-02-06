import { Injectable } from '@angular/core';

@Injectable()
export class ResumeService {

  private resume:Resume[] = [
    {
      title : "Creación",
      description: "Desde el año 2000 hasta el 2004 nació, se estudió, se organizó y se conformó la microempresa Banquetes Antony como idea de negocio de Rubiel Pabón. Los prmeros servicios de comidas era para eventos sociales con bajo número de personas.",
      image: "assets/img/about_us/4.jpg"
    },
    {
      title : "Misión",
      description: "Preparar comidas de excelente calidad, ofreciendo a diario e innovando para satisfacer a los clientes quienes consumen. Ser una microempresa de alta rentabilidad en el mercado gastronómico.",
      image: "assets/img/about_us/3.jpg"
    },
    {
      title : "Visión",
      description: "En el año 2020 ampliar la infraestructura de la microempresa,  logrando más comodidad, eficiencia y eficacia para  trabajar y ofrecer los servicios, brindando comidas de excelencia en  los eventos sociales y satisfaciendo de la mejor manera al cliente.",
      image: "assets/img/about_us/2.jpg"
    },
    {
      title : "Posicionamiento",
      description: "Actualmente banquetes antony es una microempresa consolidada como una de las empresas de banquetes en Cali que ha trabajado con diferentes salones de eventos y clientes propios para eventos con alto número de personas. Cada día trabajamos para seguir creciendo y continuar mejorando los conocimientos gastronómicos, atención al cliente, manipulación de alimentos y administración de negocios..",
      image: "assets/img/about_us/1.jpg"
    }
  ]

  constructor() { }

  getResume():Resume[] {
    return this.resume;
  }
}

export interface Resume{
  title:string;
  description:string;
  image:string
}
