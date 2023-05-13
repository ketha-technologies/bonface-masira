import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-farmers-collection',
  templateUrl: './farmers-collection.component.html',
  styleUrls: ['./farmers-collection.component.css']
})
export class FarmersCollectionComponent implements OnInit {
  data$!: Observable<any>;
  searchTerms = new Subject<string>();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.data$ = this.apiService.getCollections();
  }

}
