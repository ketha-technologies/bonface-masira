import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerms: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchTerms) {
      return items;
    }
    searchTerms = searchTerms.toLowerCase();
    return items.filter(item => item.collectionCode.toLowerCase().includes(searchTerms));
  }

}
