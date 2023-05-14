import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js"

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Tami Yu', 'Matthew Davis', 'Brittney Perry', 'Frank Hudson', 'Jeffery Salazar', 'Andres Hicks', 'Lillian Waters', 'Lela Shah', 'Tyron Ellison', 'Joshua Boone' ],
    datasets: [
      { data: [ 10, 16, 34, 65, 100, 84, 195, 73, 92, 100 ], label: 'Collection Size' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

  
}
