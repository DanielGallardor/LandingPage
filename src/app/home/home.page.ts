import { Component } from '@angular/core';
import { IonRatingComponent } from 'ionic-rating';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  customForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // do your stuff
    this.customForm = this.formBuilder.group({
      // Define your form controls here
      firstName: [''],
      lastName: [''],
      starRating: 2,
    });
  }

  ngOnInit() {
    this.customForm = this.formBuilder.group({
      // set default initial value
      starRating: [3],
    });
  }

  onRatingChange(rating: any) {
    console.log('The evaluation was modified and now its value is: ', rating);
    // do your stuff
  }
}
