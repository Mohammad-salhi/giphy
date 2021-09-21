import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiphItemBackendService {
  constructor(
    private httpService: HttpClient
  
  ) {}

  getItemDetails(itemId?: any): Observable<any> {
    var url = "https://api.giphy.com/v1/gifs/"
    var apiKey = '?api_key=SwLB6WOTZkLam6ybIwDa1DSJUtnCKZJe'
    url = url.concat(itemId).concat(apiKey);
    return this.httpService.get(url);
  }
}
