import { Injectable } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      public authenticationService: AuthenticationService,
      private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (state.url === '/login' && this.authenticationService.isAuthenticated()) {
          return false;
      }
      if (state.url !== '/login' && !this.authenticationService.isAuthenticated()) {
          this.router.navigate(['login']).then();
          return false;
      }
      return true;
  }

}
