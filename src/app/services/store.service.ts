import { inject, Injectable, signal } from '@angular/core';
import { Cat } from '../models/cat';
import { ApiService } from './api.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  apiService: ApiService = inject(ApiService);

  cat = toSignal(this.apiService.getCat(), {initialValue: {
    fact: '',
    length: 0,
  }})

  // cat = signal<Cat>({
  //   fact: '',
  //   length: 0,
  // });

  constructor() {}

  // storeCat() {
  //   this.apiService.getCat().subscribe({
  //     next: (res: Cat) => {
  //       this.cat.set(res)
  //       console.log(this.cat());
        
  //     },
  //     error: (err) => console.log(err)
      
  //   });
    
  // }
}
