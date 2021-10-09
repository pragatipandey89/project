import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HomerouteRoutingModule } from './homerouting.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HomerouteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
