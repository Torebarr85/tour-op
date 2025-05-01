import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: ` <app-navbar> </app-navbar> <router-outlet /> `,
  styles: [],
})
export class AppComponent {
  title = 'tour-op';
}
