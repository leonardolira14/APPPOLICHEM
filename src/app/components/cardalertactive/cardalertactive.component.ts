import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardalertactive',
  templateUrl: './cardalertactive.component.html',
  styleUrls: ['./cardalertactive.component.scss'],
})
export class CardalertactiveComponent implements OnInit {
@Input() precio:string = '';
@Input() tipo:string = '';
@Input() fabricacion:string = '';
@Input() marge:string = '';
@Input() fecha:string = '';
@Input() editor:string = '';
@Input() tipoAlerta:string='';

  constructor() { }

  ngOnInit() {}

}
