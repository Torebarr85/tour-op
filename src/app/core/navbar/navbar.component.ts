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
  styles: ` 
    .profile-picture {
    position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0; 
        width: 100%;
        height: 100%;
        object-fit: cover;
    border-radius: 100%; 
}`,
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
