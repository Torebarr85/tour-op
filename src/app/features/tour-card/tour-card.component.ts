import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Tour } from '../../interfaces/tour';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon],
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.css',
})
export class TourCardComponent {
  @Input() tour: Tour = {
    id: 0,
    title: '',
    location: '',
    price: 0,
    imageUrl: '',
    description: '',
  };
}
