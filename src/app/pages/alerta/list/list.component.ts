import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
listAlertas=[
  {
    title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
    precio:'1,911.12',
    margen:'1.02',
    tipoprecio:'maximo',
    tipoAlerta:'amsrp',
    fecha:'25/10/2021'

  },
  {
    title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
    precio:'1,911.12',
    margen:'1.02',
    tipoprecio:'maximo',
    restaurante:'restaurante alsdklasdk afsd f',
    tipoAlerta:'amr',
    fecha:'25/10/2021'
    
  },
  {
    title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
    precio:'1,911.12',
    margen:'1.02',
    tipoprecio:'maximo',
    restaurante:'restaurante alsdklasdk afsd f',
    marca:'marca',
    tipoAlerta:'ac',
    fecha:'25/10/2021'
    
  }
]
  constructor() { }

  ngOnInit() {}

}
