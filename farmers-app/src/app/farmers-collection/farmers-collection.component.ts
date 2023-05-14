import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

interface CollectionData {
  collectionCode: string;
  farmer: string;
  collectionSize: string;
  collectionDate: string;
}

@Component({
  selector: 'app-farmers-collection',
  templateUrl: './farmers-collection.component.html',
  styleUrls: ['./farmers-collection.component.css']
})

export class FarmersCollectionComponent implements OnInit {
  collections$!: Observable<any>;
  searchTerms: string;

  public allLists: Array<CollectionData>;

  public filteredLists: Array<CollectionData>;

  constructor(private apiService: ApiService, private el: ElementRef) {
    this.allLists = new Array();
    this.filteredLists = new Array();
    this.searchTerms = '';
  }
  
  ngOnInit() {
    this.collections$ = this.apiService.getCollections();

    this.collections$.subscribe((results) => {
      this.allLists = results
      this.filteredLists = results
    })

    // this.searchTerms.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   switchMap((searchTerms: string) => this.apiService.searchCollections(searchTerms))
    // ).subscribe(
    //   (collections: any) => {
    //     this.collections$ = collections;
    //   }
    // )
  }

  filterCollections(searchString: String) {
    if (searchString.length >=3 ){
      this.filteredLists = this.allLists.filter((list) => {
        return list.collectionCode.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
      });
    } else {
      this.filteredLists = this.allLists
    }
  }

}
