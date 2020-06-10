import { Component, OnInit, Output } from '@angular/core';
import { SchoolapiService } from 'src/app/services/schoolapi.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchData: any;
  public zipcode: string;

  constructor(private _schoolapiservice: SchoolapiService) { }

  @Output() searchClicked = new EventEmitter();

  ngOnInit(): void {
  }

  search(){
    console.log(this.zipcode);
    // this.searchClicked.emit(this.zipcode);
  }

}
