import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { SellerlistComponent } from './sellerlist/sellerlist.component';
import { SellerRoutingModule } from './sellerroute-routing.module';
import { AddbookComponent } from './addbook/addbook.component';
import { ProfilesetComponent } from './profileset/profileset.component';
import { SellerHomePageComponent } from './seller-home-page/seller-home-page.component';

@NgModule({
  declarations: [HomeDashboardComponent, SellerlistComponent, AddbookComponent, ProfilesetComponent, SellerHomePageComponent],
  imports: [CommonModule, SellerRoutingModule],
})
export class SellerModule {}
