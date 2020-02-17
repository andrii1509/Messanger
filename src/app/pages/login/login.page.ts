import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) {
      if (this.authenticationService.isAuthenticated()) {
          this.router.navigate(['chats']).then();
      }
  }

  loginControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  ngOnInit() {

  }

  auth() {
      this.authenticationService.login(this.loginControl.value, this.passwordControl.value).subscribe();
  }

  private validate() {
    return this.loginControl.value && this.passwordControl.value;
  }
}
