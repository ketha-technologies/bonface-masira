import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-farmers-collection',
  templateUrl: './farmers-collection.component.html',
  styleUrls: ['./farmers-collection.component.css']
})
export class FarmersCollectionComponent implements OnInit {
  collections$!: Observable<any>;
  searchTerms = new Subject<string>();

  constructor(private apiService: ApiService, private el: ElementRef) { }

  ngOnInit() {
    this.collections$ = this.apiService.getCollections();

    this.searchTerms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((searchTerms: string) => this.apiService.searchCollections(searchTerms))
    ).subscribe(
      (collections: any) => {
        this.collections$ = collections;
      }
    )
  }

  search(searchTerms: string): void {
    this.searchTerms.next(searchTerms)
  }

}
