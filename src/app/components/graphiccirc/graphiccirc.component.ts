import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexResponsive,
  ApexStroke,
  ApexFill,
  ApexGrid,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
  grid:ApexGrid;
  plotoptions:ApexPlotOptions
  yaxis:ApexYAxis
};


@Component({
  selector: 'app-graphiccirc',
  templateUrl: './graphiccirc.component.html',
  styleUrls: ['./graphiccirc.component.scss'],
})
export class GraphiccircComponent implements OnInit {
  @ViewChild("chart",{static:false}) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() title:string='';
  @Input() serie:number[]=[];
  @Input() lable:string;
  show:boolean = false;
  constructor() { 
    
  }

  ngOnInit() {
    this.chartOptions = {
      series: this.serie,
      plotoptions:{
        polarArea: {
          rings: {
            strokeWidth: 0
          }
        }
      },
      yaxis: {
        show: false
      },
      chart: {
        foreColor: '#373d3f',
        type: "polarArea",
        width: '100%',
      },
     
      fill: {
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 350,
              height: 'auto',
              zoom: {
                enabled: true
              }
              
            },
            legend: {
              position: "top",
              horizontalAlign: 'center', 
              labels: {
                colors: '#fff',
                useSeriesColors: false
            },
            }
          }
        }
      ]
    };
    this.show = true;
  }
  ngAfterContentInit(): void {
    
  }
}
