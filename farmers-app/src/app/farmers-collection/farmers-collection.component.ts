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
  isInvalidInput: boolean; // New variable to store the validation status

  public allLists: Array<CollectionData>;
  public filteredLists: Array<CollectionData>;

  constructor(private apiService: ApiService, private el: ElementRef) {
    this.allLists = new Array();
    this.filteredLists = new Array();
    this.searchTerms = '';
    this.isInvalidInput = false; // Initialize the validation status
  }
  
  ngOnInit() {
    this.collections$ = this.apiService.getCollections();

    this.collections$.subscribe((results) => {
      this.allLists = results
      this.filteredLists = results
    });
  }

  filterCollections() {
    const searchString = this.searchTerms.trim();

    // Validate the search input
    if (searchString.length >= 3 && this.validateSearchInput(searchString)) {
      this.isInvalidInput = false; // Reset the validation status
      this.filteredLists = this.allLists.filter((list) => {
        return list.collectionCode.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
      });
    } else {
      this.isInvalidInput = true; // Set the validation status to true
      this.filteredLists = this.allLists;
    }
  }

  private validateSearchInput(searchTerms: string): boolean {
    const lowercaseTerms = searchTerms.toLowerCase();
    const searchArray = lowercaseTerms.split('');
    const charCountMap = new Map();

    for (const char of searchArray) {
      if (charCountMap.has(char)) {
        charCountMap.set(char, charCountMap.get(char) + 1);
      } else {
        charCountMap.set(char, 1);
      }
    }

    for (const count of charCountMap.values()) {
      if (count >= 3) {
        return true;
      }
    }

    return false;
  }

}
