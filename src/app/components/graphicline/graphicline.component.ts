import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-graphicline',
  templateUrl: './graphicline.component.html',
  styleUrls: ['./graphicline.component.scss'],
})
export class GraphiclineComponent implements OnInit {
@Input() title ='';
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80], label: 'Product A' },
    { data: [28, 48, 40 ], label: 'Product B' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March',];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        ticks:{
          beginAtZero:true,
          fontColor: '#fff'
        },
        gridLines: {
          display: true ,
          color: "rgba(255,255,255,0.5)"
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
          color: "rgba(255,255,255,0.5)"
        },
      }],
    },
    plugins: {
      title: {
        display: true,
        text: 'Custom Chart Title',
        padding: {
            top: 10,
            bottom: 30
        }
      }
  }
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
     
      borderColor: '#999da8',
    },
    { // red
      
      borderColor: '#f7ac43',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = {
    title: {
      display: true,
      text: 'Custom Chart Title',
      padding: {
          top: 10,
          bottom: 30
      }
    }
};

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  constructor() {
   
  }
  ngOnInit() {}

}
