import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardalert',
  templateUrl: './cardalert.component.html',
  styleUrls: ['./cardalert.component.scss'],
})
export class CardalertComponent implements OnInit {
@Input() title:string ='';
@Input() precio:string = '';
@Input() margen:string = '';
@Input() tipoprecio: string='';
@Input() marca:string='';
@Input() restaurante:string = '';
@Input() fecha:string = '';
@Input() tipoAlerta:string = '';
  constructor() { }

  ngOnInit() {}

}
