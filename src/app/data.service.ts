import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/FAQ-data.json');
  }

  postData(data) {
    return this.http.post('http://httpbin.org/post', data);
  }
}

