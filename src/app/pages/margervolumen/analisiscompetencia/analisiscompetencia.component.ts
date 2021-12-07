import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analisiscompetencia',
  templateUrl: './analisiscompetencia.component.html',
  styleUrls: ['./analisiscompetencia.component.scss'],
})
export class AnalisiscompetenciaComponent implements OnInit {
  list = [
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO',
      subtitle:'Pragná',
      precio:'120.00',
      Diferencia1:'1.05',
      Diferencia2:'2.05',
      Tapa:'Tapa enroscable',
      Etiquetas:'NA',
      Embase:'Plástico transparente sin sellador'
    }
  ]
  constructor() { }

  ngOnInit() {}

}
