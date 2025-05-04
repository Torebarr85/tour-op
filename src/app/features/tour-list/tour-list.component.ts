import { Component, inject } from '@angular/core';
import { combineLatest, map, Observable, of, startWith } from 'rxjs';
import { Tour } from '../../interfaces/tour';
import { TourService } from '../../services/tour.service';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from '../tour-card/tour-card.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
    MatLabel,
    MatInputModule,
    MatIconModule,
    FiltersComponent,
  ],
  templateUrl: './tour-list.component.html',
})
export default class TourListComponent {
  tourService = inject(TourService);
  searchControl = new FormControl('');

  tours$: Observable<Tour[]> = this.tourService.getTours();
  // formControl.valueChanges è un observable che emette il valore corrente
  // e startWith('') garantisce valore iniziale vuoto
  search$ = this.searchControl.valueChanges.pipe(startWith(''));

  filteredToursSignal = toSignal(
    //combineLatest: ogni volta che uno dei due observable emette, dammi l’ULTIMO valore di entrambi.
    // Ti dà sempre la coppia aggiornata più recente di [tours, search]
    combineLatest([this.tours$, this.search$]).pipe(
      //è destructuring -> prende i due valori dell’array e li mette in variabili comode
      map(([tours, search]) => {
        //?? dice: Se a sinistra è null/undefined -> usa il valore a destra. cosi evita i null e undefined
        const query = (search ?? '').toLowerCase();

        // filtro i tour in base alla query
        return tours.filter((tour) => tour.title.toLowerCase().includes(query));
      })
    ),
    // Valore iniziale per il signal, utile finché non arrivano i dati
    { initialValue: [] }
  );

  clearSearch() {
    this.searchControl.reset();
  }
}
