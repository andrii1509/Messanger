import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthenticationService} from './services/authentication/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuard} from './services/auth-guard/auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {WebsocketService} from './services/websocket/websocket.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
  ],
  providers: [
      StatusBar,
      SplashScreen,
      WebsocketService,
      AuthGuard,
      AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
