import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { CartComponent } from './cart/cart.component';
import { BuyerProfileSetComponent } from './buyer-profile-set/buyer-profile-set.component';
import { BuyerHomePageComponent } from './buyer-home-page/buyer-home-page.component';



@NgModule({
  declarations: [
    BuyerDashboardComponent,
    BuyerListComponent,
    CartComponent,
    BuyerProfileSetComponent,
    BuyerHomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuyerModule { }
