import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { ProfilesetComponent } from './profileset/profileset.component';
import { SellerHomePageComponent } from './seller-home-page/seller-home-page.component';
import { SellerlistComponent } from './sellerlist/sellerlist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent,
    children: [
      { path: '', component: SellerHomePageComponent },
      { path: 'seller', component: SellerHomePageComponent },
      { path: 'list', component: SellerlistComponent },
      { path: 'addbook', component: AddbookComponent },
      { path: 'profile', component: ProfilesetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
