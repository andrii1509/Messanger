import { Injectable } from '@angular/core';
import {UserService} from '../user-store/user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(
      private userService: UserService,
      private router: Router
  ) { }

    isAuthenticated(): boolean {
      return this.userService.isLoggedIn();
    }

    login() {
      this.userService.token = 'wrtqweury';
      this.router.navigate(['main']).then();
    }


    logOut() {
        this.userService.token = null;
        this.router.navigate(['login']).then();
    }
}
