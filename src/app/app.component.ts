import { Component, OnInit } from '@angular/core';
import { Child } from './child.model'
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database"; 
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homeschool-organizer';
  childProfiles: AngularFireList<any>;

  constructor(private af: AngularFireDatabase) {
    
  }
  ngOnInit(): void {
    this.childProfiles = this.af.list('/childProfiles');
  }

  addKid(child: Child): void {
    this.childProfiles.push(child);
  }
  
}
