import { Component, OnInit } from '@angular/core';
import { Child } from '../child.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { literal } from '@angular/compiler/src/output/output_ast';

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
  childGradeSelection: string;



  addBool = false;

  constructor(private dataservice: DataService, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  newChild() {
    this.addBool = true;


  }

  addChild(){
    this.childGradeSelection = (<HTMLInputElement>document.getElementById("grade")).value;
    let child = new Child(this.childNameInput, this.childGradeSelection);
    this.children.push(child);
    this.addBool = false;

    this.dataservice.create_NewChild(child);
  }

  checkBool(){
    return this.addBool;
  }
  
  setGrade(){
    
  }

}
