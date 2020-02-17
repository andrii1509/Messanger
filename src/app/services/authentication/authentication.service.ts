import { Injectable } from '@angular/core';
import {UserService} from '../../user-store/user.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environmentUrl} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(
      private userService: UserService,
      private router: Router,
      private http: HttpClient
  ) { }

    isAuthenticated(): boolean {
      return this.userService.isLoggedIn();
    }

    login(login: string, password: string): Observable<void> {

      // for Testing
      this.userService.setAuthToken('response.data.token');
      this.router.navigate(['chats']).then();
      // --------------
      const requestBody = {
          login,
          password
      };
      return this.http.post(environmentUrl.url + '', requestBody)
          .pipe(
              map(((response: any) => {
                  if (response && response.status) {
                      if (response.data && response.data.token) {
                          this.userService.setAuthToken(response.data.token);
                      }
                      if (response.data && response.data.user) {
                          this.userService.processUser(response.data.user);
                      }
                  }
              }))
          );
    }


    logOut() {
        this.userService.logOut();
        this.router.navigate(['login']).then();
    }
}
