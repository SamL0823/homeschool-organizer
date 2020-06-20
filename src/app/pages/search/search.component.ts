import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SchoolapiService } from 'src/app/services/schoolapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchData: any;
  public stateCode: string;
  public zipcode: string;

  constructor(private _schoolapiservice: SchoolapiService) { }

  ngOnInit(): void {

    
  }

  search(){
    console.log(this.zipcode);
    console.log(this.stateCode);
    this._schoolapiservice
    .getSchoolsByState(this.stateCode, this.zipcode)
    .subscribe(response => {
      this.searchData = response;
      console.log(this.searchData);
    },
    error => {
      console.log(error);
    })
    // this.searchClicked.emit(this.zipcode);
  }

}
