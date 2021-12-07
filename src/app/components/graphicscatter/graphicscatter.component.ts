import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
@Component({
  selector: 'app-graphicscatter',
  templateUrl: './graphicscatter.component.html',
  styleUrls: ['./graphicscatter.component.scss'],
})
export class GraphicscatterComponent implements OnInit {
  @ViewChild('myChart',{static:false})  myChart:any;
  public scatterChartOptions:ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    plugins: {

    },
    tooltips:{
      callbacks: {
        label: function(t:any, d:any) {
          return d.datasets[t.datasetIndex].label +
            ': (Day:' + t.xLabel + ', Total:' + t.yLabel + ')';
        }
      }
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Precio Venta'
        },
        gridLines: {
          display: true,
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Volumen Venta'
        },
        gridLines: {
          display: true,
        }

      }]
    },
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 ,r:10},
        { x: 2, y: 3,r:10 },
        { x: 20, y: 30,r:10 },

      ],
      label: 'Series A',

    },
  ];
  public scatterChartType: ChartType = 'bubble';


  ngOnInit() {}

}
