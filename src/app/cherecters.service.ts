import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CherectersService {
  
  url = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) {}

  getCherecters(page: number) {
    return this.http.get(this.url + '?page=' + page);
  }
}
