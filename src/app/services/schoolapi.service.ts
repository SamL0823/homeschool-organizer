import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchComponent } from '../pages/search/search.component';

@Injectable({
  providedIn: 'root'
})
export class SchoolapiService {

  public apiData: any;

  tempKey = '9ed3192d5aa4158476fcf69b1c307acd';
  apiUrl = `https://api.greatschools.org/search/schools?key=${this.tempKey}&state=`

  constructor(public httpclient: HttpClient) { }

  getSchoolsByState(stateCode: string, zipcode: string): Observable<any> {
    return this.httpclient.get(this.apiUrl + stateCode + '&q=' + zipcode, {headers: {"Access-Control-Allow-Origin": "*"}}); 
    
  }
 
}
