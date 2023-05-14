import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getCollections(): Observable<any> {
    return this.http.get('http://localhost:3000/collections');
  }

  searchCollections(term: string): Observable<any> {
    return this.http.get(`http://localhost:3000/collections?collectionCode=${term}`);
  }

  isValidCollection(collectionCode: string, term: string): boolean {
    const regex = new RegExp(`.*(${term}).*`);
    return regex.test(collectionCode) && this.hasThreeIdenticalLetters(collectionCode);
  }

  hasThreeIdenticalLetters(str: string): boolean {
    // const countObj = {};
    const countObj: {[key: string]: number} = {};
    for (let i = 0; i < str.length; i++) {
      countObj[str[i]] = (countObj[str[i]] || 0) + 1;
      if (countObj[str[i]] >= 3) {
        return true;
      }
    }
    return false;
  }
}
