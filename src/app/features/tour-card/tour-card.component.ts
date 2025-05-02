import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Tour } from '../../interfaces/tour';
@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.css',
})
export class TourCardComponent {


  @Input() tour: Tour = {
    id: 0,
    name: '',
    location: '',
    price: 0,
    imageUrl: '',
    description: ''
  };

  
 
}
