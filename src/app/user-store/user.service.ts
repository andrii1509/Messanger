import { Injectable } from '@angular/core';
import {UserModel} from '../models/user-model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public token: string;
  private user: UserModel;

  constructor() { }

  setAuthToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', this.token);
  }

  getAuthToken(): string {
      if (this.isLoggedIn()) {
          return localStorage.getItem('authToken');
      } else {
          return null;
      }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

    logOut() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('authToken');
    }

    processUser(user: any) {
      this.user = new UserModel().deserialize(user);
    }

    setCachedUser() {
        if (this.isLoggedIn()) {
            this.token = localStorage.getItem('authToken');
        }
    }
}
