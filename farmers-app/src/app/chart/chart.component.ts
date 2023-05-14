import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Observable, Subject } from 'rxjs';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js"
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  title = 'ng2-charts-demo';
  collections$!: Observable<any>;

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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.collections$ = this.apiService.getCollections();
  }

  
}
