import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';



@NgModule({
  declarations: [
    BuyerDashboardComponent,
    BuyerListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuyerModule { }
