import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicRatingComponent } from 'ionic-rating-component';
import { IonicRatingComponentModule } from 'ionic-rating-component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HomePageRoutingModule,
    IonicRatingComponentModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

@NgModule({
  imports: [IonicModule.forRoot()],
})
export class AppModule {}
