import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tour } from '../../interfaces/tour';
import { TourService } from '../../services/tour.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TourCardComponent } from '../tour-card/tour-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, TourCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  tours$: Observable<Tour[]> = of([]);
  tourService = inject(TourService);

  ngOnInit(): void {
    this.tours$ = this.tourService.getTours();
  }
}
