import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(pageNo, result, seed): Observable<any> {
    const url = AppConfig.WebApiEndpoint + 'page=' + pageNo + '&results=' + result + '&seed=' + seed;
    console.log('URL:-', url);
    return this.httpClient.get<any>(url);
  }
}
