import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.scss',
})
export class CatComponent {
  apiService: ApiService = inject(ApiService);

  storeService: StoreService = inject(StoreService);

  image = 'assets/images/cat.jpg';
  title = 'Cat Facts';

  ngOnInit(): void {
    this.storeCat();
  }

  storeCat(): void {
    this.storeService.storeCat();
  }

  showNextFact(): void {
    this.storeService.storeCat();
  }
}
