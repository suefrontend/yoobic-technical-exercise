import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterListPage } from './masterlist.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MasterListRoutingModule } from './masterlist-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MasterListRoutingModule,
  ],
  declarations: [MasterListPage],
})
export class Tab2PageModule {}
