import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tour } from '../../interfaces/tour';
import { TourService } from '../../services/tour.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TourCardComponent } from '../tour-card/tour-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    TourCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  tours$: Observable<Tour[]> = of([]);
  tourService = inject(TourService);
  duration: any;
  maxPrice: any;
  search: any;

  ngOnInit(): void {
    this.tours$ = this.tourService.getTours();
  }
}
