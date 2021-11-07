import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterListPage } from './masterlist.page';

const routes: Routes = [
  {
    path: '/masterlist',
    component: MasterListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterListRoutingModule {}
