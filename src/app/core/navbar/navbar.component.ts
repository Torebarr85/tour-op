import { Component, computed, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  auth = inject(AuthService);
  document = inject(DOCUMENT);
  authSignal = toSignal<boolean>(this.auth.isAuthenticated$);
  userSignal = toSignal(this.auth.user$, { initialValue: null });

  pictureSignal = computed(() => {
    return this.userSignal() ? this.userSignal()?.picture : null;
  });

  constructor() {
    console.log(this.userSignal()); // perché sono null anche se sono loggato?
    console.log(this.pictureSignal()); // perché sono null anche se sono loggato?
  }
}
