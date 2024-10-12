import { inject, Injectable, signal } from '@angular/core';
import { Cat } from '../models/cat';
import { ApiService } from './api.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  apiService: ApiService = inject(ApiService);

  cat = signal<Cat>({
    fact: '',
    length: 0,
  });

  // cat = toSignal(this.apiService.getCat(), {initialValue: {
  //   fact: '',
  //   length: 0,
  // }});
  storeCat() {
    this.apiService.getCat().subscribe({
      next: (res: Cat) => {
        this.cat.set(res);
      },
      error: (err) => console.log(err),
    });
  }
}
