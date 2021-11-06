import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignIn } from './signin/signin.page';
import { MasterListPage } from './masterlist/masterlist.page';
import { DetailPage } from './detail/detail.page';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignIn },
  { path: 'masterlist', component: MasterListPage },
  { path: 'masterlist-detail/:id', component: DetailPage },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
