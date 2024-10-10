import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cat } from '../models/cat';
import { Observable } from 'rxjs';
// import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  http: HttpClient = inject(HttpClient);

  url = 'https://catfact.ninja/fact';

  // storeService: StoreService = inject(StoreService);

  getCat(): Observable<Cat> {
    return this.http.get<Cat>(this.url);
  }
}

// https://catfact.ninja/fact -- cat_api
