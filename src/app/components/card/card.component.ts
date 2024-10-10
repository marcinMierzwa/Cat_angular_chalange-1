import { Component, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  storeService: StoreService = inject(StoreService);

}
