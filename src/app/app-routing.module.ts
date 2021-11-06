import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignIn } from './signin/signin.page';
import { MasterList } from './masterlist/masterlist.page';
import { MasterListDetail } from './masterlist-detail/masterlist-detail.page';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignIn },
  { path: 'masterlist', component: MasterList },
  { path: 'masterlist-detail/:id', component: MasterListDetail },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
