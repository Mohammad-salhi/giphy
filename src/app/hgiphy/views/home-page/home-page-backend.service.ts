import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomePageBackendService {
  constructor(
    private httpService: HttpClient
  
  ) {}

  getDashboardItems(filter?: any): Observable<any> {
    console.log(filter)
    if (!filter) {
    var url ='https://api.giphy.com/v1/gifs/trending?api_key=SwLB6WOTZkLam6ybIwDa1DSJUtnCKZJe&limit=25&rating=g';
    }
    else {
      var url = 'https://api.giphy.com/v1/gifs/search?api_key=SwLB6WOTZkLam6ybIwDa1DSJUtnCKZJe';
      url = filter ? url.concat('&q=').concat(filter) : url;
      url = url.concat("&limit=25&offset=0&rating=g&lang=en")
    }
    return this.httpService.get(url);
  }
}
