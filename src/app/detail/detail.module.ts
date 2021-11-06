import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailPage } from './detail.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DetailPageRoutingModule } from './detail-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: DetailPage }]),
    DetailPageRoutingModule,
  ],
  declarations: [DetailPage],
})
export class DetailPageModule {}
