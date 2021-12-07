import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-grficacirculo',
  templateUrl: './grficacirculo.component.html',
  styleUrls: ['./grficacirculo.component.scss'],
})
export class GrficacirculoComponent implements OnInit {
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
      labels:{
        fontColor:'#fff'
      }
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        }
      }
    },
  };

  pieChartLabels: Label[] = ['Nitrogen', 'Oxygen', 'Argon'];

  pieChartData: number[] = [78.09, 20.95, 50.93];

  pieChartType: ChartType = 'pie';

  pieChartLegend = true;

  pieChartPlugins = [];

  pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor() { }

  ngOnInit() {}

}
