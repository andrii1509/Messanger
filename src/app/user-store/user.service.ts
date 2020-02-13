import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public token: string;

  constructor() { }

  setAuthToken(token: string) {
    this.token = token;
  }
  getAuthToken() {
    return this.token;
  }
  isLoggedIn(): boolean {
    return !!this.token;
  }

}
