import { Component } from '@angular/core';
import { IonicRatingModule } from 'ionic-rating';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  rating: number = 0;

  setRating(value: number) {
    this.rating = value;
  }

}


