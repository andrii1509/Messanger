import { Component } from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthenticationService} from './services/authentication/authentication.service';
import {UserService} from './user-store/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
      {
          title: 'Profile',
          url: '/profile',
          icon: 'person-circle-outline'
      },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    public userService: UserService,
    public navController: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
    this.userService.setCachedUser();
  }
    logOut() {
      this.authenticationService.logOut();
    }

    redirect(url: string) {
      this.navController.navigateForward(url).then();
    }
}
