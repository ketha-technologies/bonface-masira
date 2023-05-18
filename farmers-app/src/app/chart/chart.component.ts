import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChartConfiguration } from "chart.js"
import { ApiService } from '../api.service';

interface CollectionData {
  collectionCode: string;
  farmer: string;
  collectionSize: string;
  collectionDate: string;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  collections$!: Observable<CollectionData[]>;

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], label: 'Collection Size' },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.collections$ = this.apiService.getCollections();
    this.collections$.subscribe(collections => {
      const labels: any = [];
      const data: any = [];
      collections.forEach(collection => {
        labels.push(collection.collectionDate);
        data.push({
          x: collection.collectionDate,
          y: Number(collection.collectionSize),
        });
      });
      this.barChartData = {
        labels,
        datasets: [
          { data, label: 'Collection Size' },
        ],
      };
    });
  }
}
