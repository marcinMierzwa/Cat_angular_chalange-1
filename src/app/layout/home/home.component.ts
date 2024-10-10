import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  apiService: ApiService = inject(ApiService);

  ngOnInit(): void {
    this.getCat();
  }

  getCat(): void {
    this.apiService.getCat();
  }

}
