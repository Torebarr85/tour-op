import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { toSignal } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  auth = inject(AuthService);
  document = inject(DOCUMENT);
  authSignal = toSignal(this.auth.isAuthenticated$);
  picture = signal<string>('');

  constructor() {
    this.auth.user$.subscribe((e) => this.picture.set(e?.picture || ''));
    this.auth.isAuthenticated$.subscribe((val) => {
      console.log('isAuthenticated', val);
    });
  }
}
