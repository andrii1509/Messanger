import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import {MessagesComponent} from './messages/messages.component';
import {DiscussionComponent} from './discussion/discussion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [
      MainPage,
      DiscussionComponent,
  ]
})
export class MainPageModule {}
