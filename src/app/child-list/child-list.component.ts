import { Component, OnInit } from '@angular/core';
import { Child } from '../child.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.scss']
})
export class ChildListComponent implements OnInit {
  children: Child[] = [
    new Child("Sam", "Pre-K")
  ];
  childNameInput: string;
  childGradeInput: string;

  addBool = false;

  constructor() { }

  ngOnInit(): void {
  }

  newChild() {
    this.addBool = true;


  }

  addChild(){
    var child = new Child(this.childNameInput, this.childGradeInput);
    this.children.push(child);
    this.addBool = false;
  }

  checkBool(){
    return this.addBool;
  }

}
