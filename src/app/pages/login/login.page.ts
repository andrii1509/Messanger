import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
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
  ) { }

  loginControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  ngOnInit() {
      if (this.authenticationService.isAuthenticated()) {
          this.router.navigate(['main']).then();
      }
  }

  auth() {
    // if (this.validate()) {

        this.authenticationService.login();
    // }
  }

  private validate() {
    return this.loginControl.value && this.passwordControl.value;
  }
}
