import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database"; 
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homeschool-organizer';
  kids: AngularFireList<any>;

  constructor(private af: AngularFireDatabase) {
    
  }
  ngOnInit(): void {
    this.kids = this.af.list('/kids');
  }

  // addKid(child: ChildProfile): void {
  //   this.kids.push(child);
  // }
  
}
