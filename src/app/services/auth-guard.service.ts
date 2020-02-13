import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      public authenticationService: AuthenticationService,
      private router: Router,
  ) { }

  canActivate() {
      if (!this.authenticationService.isAuthenticated()) {
          this.router.navigate(['login']).then();
      }
      return this.authenticationService.isAuthenticated();
  }

}
