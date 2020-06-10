import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchComponent } from '../pages/search/search.component';

@Injectable({
  providedIn: 'root'
})
export class SchoolapiService {

  public apiData: any;
  stateCode: string = 'IL';
  zipcode: string = '62221';

  tempKey = '9ed3192d5aa4158476fcf69b1c307acd';
  apiUrl = `https://api.greatschools.org/search/schools?key=${this.tempKey}&state=`

  constructor(public httpclient: HttpClient) { }

  getSchoolsByState(): Observable<any> {
    this.apiData = this.httpclient.get(this.apiUrl + this.stateCode + '&q' + this.zipcode); //CA is temp, will be stateCode
    return this.apiData;
  }
  //the api requires a state and a query string '&q='
  //zipcode works as query string when tested in postman
  //additional options include levelCode "elementary-schools", "middle-schools", "high-schools"
  // filterSchoolsByZipCode(zipCode): Observable<any> {


  // }
}
