import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ReactiveFormsModule,
      LoginPageRoutingModule,

      // material
      MatButtonModule,
      MatInputModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
