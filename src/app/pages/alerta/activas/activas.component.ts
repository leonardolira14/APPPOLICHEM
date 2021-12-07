import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activas',
  templateUrl: './activas.component.html',
  styleUrls: ['./activas.component.scss'],
})
export class ActivasComponent implements OnInit {
listAlert = [
  {
    editor:'Leonardo Lira Cazares',
    fecha:'02/12/2012',
    precio:'45235',
    tipo:'funtable',
    fabricacion:'Distribución',
    margen:'10.50',
    tipoAlerta:'amr'
  },
  {
    editor:'Leonardo Lira Cazares',
    fecha:'02/12/2012',
    precio:'45235',
    tipo:'funtable',
    fabricacion:'Distribución',
    margen:'10.50',
    tipoAlerta:'amsrp'
  },
  {
    editor:'Leonardo Lira Cazares',
    fecha:'02/12/2012',
    precio:'45235',
    tipo:'funtable',
    fabricacion:'Distribución',
    margen:'10.50',
    tipoAlerta:'ac'
  }
]
  constructor() { }

  ngOnInit() {}

}
