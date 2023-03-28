import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakepasswordService {

  Password: any;

  constructor(private http: HttpClient) { }

  Savedata(SurveyData){
    var url = "http://localhost:3000/api/vote";
    return this.http.post(url, SurveyData,
      {headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ''
        })});
  }
  
}