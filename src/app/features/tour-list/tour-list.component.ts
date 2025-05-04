import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tour } from '../../interfaces/tour';
import { TourService } from '../../services/tour.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { TourCardComponent } from '../tour-card/tour-card.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [
    AsyncPipe,
    TourCardComponent,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    MatLabel,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './tour-list.component.html',
})
export default class TourListComponent implements OnInit {
  tours$: Observable<Tour[]> = of([]);
  tourService = inject(TourService);
  searchControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.tours$ = this.tourService.getTours();
  }
}
