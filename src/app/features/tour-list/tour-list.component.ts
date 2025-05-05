import { Component, computed, inject, Input, signal } from '@angular/core';
import { TourService } from '../../services/tour.service';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from '../tour-card/tour-card.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FiltersComponent } from '../../core/filters/filters.component';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [
    TourCardComponent,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FiltersComponent,
  ],
  templateUrl: './tour-list.component.html',
})
export default class TourListComponent {
  tourService = inject(TourService);

  searchTerm = signal<string>('');
  tours = toSignal(this.tourService.getTours(), { initialValue: [] });

  handleSearch(event: string) {
    this.searchTerm.set(event);
  }

  filteredTours = computed(() => {
    return this.tours().filter((res) =>
      res.title.toLowerCase().includes(this.searchTerm().toLowerCase())
    );
  });
}
