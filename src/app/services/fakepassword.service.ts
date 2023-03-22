import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakepasswordService {

  Password: any;

  constructor() { }

  ComparePassword(){
    if (this.Password) {
      true
    }
  }
}
