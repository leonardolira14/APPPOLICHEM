import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-graphicsbarralt',
  templateUrl: './graphicsbarralt.component.html',
  styleUrls: ['./graphicsbarralt.component.scss'],
})
export class GraphicsbarraltComponent implements OnInit {
  
  barChartOptions: ChartOptions = {
    responsive: true,
    legend:{
      labels:{
        fontColor:'#fff'
      }
    },
   
    scales: {
      xAxes: [{
        display: true,
        ticks:{
          beginAtZero:true,
          fontColor: '#fff'
        },
        gridLines: {
          display: true ,
          color: "#FFFFFF"
        },
      }],
      yAxes: [{
        display: true,
        ticks:{
          beginAtZero:true,
          fontColor: '#fff'
        },
        gridLines: {
          display: true ,
          color: "#FFFFFF"
        },
      }],
    }
  };
  barChartLabels: Label[] = ['Contenido', 'Empaque', 'Generales'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: '#0732B9',

    },
  ];
  barChartData: ChartDataSets[] = [
    { data: [[45, 37], [60, 70], [46, 33]], label: 'Best Fruits' }
  ];
  constructor() { 
  }

  ngOnInit() {}

}
