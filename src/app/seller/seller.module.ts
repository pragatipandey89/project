import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { SellerlistComponent } from './sellerlist/sellerlist.component';
import { SellerRoutingModule } from './sellerroute-routing.module';

@NgModule({
  declarations: [HomeDashboardComponent, SellerlistComponent],
  imports: [CommonModule, SellerRoutingModule],
})
export class SellerModule {}
