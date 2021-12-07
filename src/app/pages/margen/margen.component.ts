import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-margen',
  templateUrl: './margen.component.html',
  styleUrls: ['./margen.component.scss'],
})
export class MargenComponent implements OnInit {
  title = '';
  reallist=[
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      cliente:'este es un cliente de grandes',
    },
    
  ]
  msrplist=[
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
     
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
     
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
      
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
     
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
     
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
     
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
     
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
     
    },
    {
      title:'SAL ROSA DEL HIMALAYA MOLIDO  FINO BOLSA 1',
      precio:152.52,
      margen:1.05,
     
    },
    
  ]
  list = [];
  constructor(
    private menu: MenuController,
    private rutaActiva: ActivatedRoute,
  ) {

    this.rutaActiva.params.subscribe(data => {
      this.ngSelectMargen(data.tipo);
    })
  }

  ngOnInit() { }
  onMenu() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngSelectMargen(tipo){
    switch(tipo){
      case 'real':{
          this.title = 'Margen medio Real';
          this.list = this.reallist;
          console.log(this.title);
          break;
      }
      case 'msrp':{
          this.title ='Margen medio MSRP';
          this.list = this.msrplist;
          break;
      }
    }
  }
  unread(item){
    console.log(item);
  }

}
