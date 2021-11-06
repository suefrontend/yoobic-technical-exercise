import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignIn } from './signin.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SignInPageRoutingModule } from './signin-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SignInPageRoutingModule,
  ],
  declarations: [SignIn],
})
export class SignInPageModule {}
