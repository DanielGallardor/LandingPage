import { Component } from '@angular/core';
import { IonRatingComponent } from 'ionic-rating';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { FakepasswordService } from '../services/fakepassword.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  customForm: FormGroup;
  rating: number[] = [1,2,3,4,5];
  starRatingGameplay: number[] = [1,2,3,4,5];
  starRatingMusic: number[] = [1,2,3,4,5];
  starRatingDesign: number[] = [1,2,3,4,5];
  starRatingStory: number[] = [1,2,3,4,5];
  starRatingDifficulty: number[] = [1,2,3,4,5];
  DataForAPI:any;
  gameplay:any;
  music:any;
  design:any;
  story:any;
  difficulty:any;
  commentary:any;

  constructor(private formBuilder: FormBuilder, public APIservice:FakepasswordService) {
    // do your stuff
    this.customForm = this.formBuilder.group({
      // Define your form controls here
      firstName: [''],
      lastName: [''],
      starRatingGameplay: 1,
      starRatingMusic: 1,
      starRatingDesign: 1,
      starRatingStory: 1,
      starRatingDifficulty: 1,
    });
  }

  ngOnInit() {
    this.customForm = this.formBuilder.group({
      // set default initial value
      starRatingGameplay: [1],
      starRatingMusic: [1],
      starRatingDesign: [1],
      starRatingStory: [1],
      starRatingDifficulty: [1],
    });
  }

  onRatingChange(starRatingGameplay: any) {
    console.log('The evaluation was modified and now its value is: ', starRatingGameplay);
    // do your stuff
  }

  SendData(){
    const Data = {teamId:"1", gameplay:this.gameplay, music:this.music, design:this.design, story:this.story, difficulty:this.difficulty, commentary:this.commentary};
    this.APIservice.Savedata(Data).subscribe(
      this.DataForAPI = JSON.stringify,
      );
      window.location.reload();
      window.alert("Your record was saved. Thank you");
  }

}