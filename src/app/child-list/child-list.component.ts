import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Child } from '../child.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  template: `<app-childinfo [currentChild]="selectedChild"></app-childinfo>`,
  styleUrls: ['./child-list.component.scss']
})
export class ChildListComponent implements OnInit {
  children: Child[] = [
    new Child("Sam", "Pre-K")
  ];
  childNameInput: string;
  childGradeInput: string;
  
  selectedChild: Child = new Child();

  @Output() childSelected = new EventEmitter<any>();

  addBool = false;

  constructor(private router: Router) { }

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

  onSelect(child: Child) {
    if(this.selectedChild){
      this.selectedChild.selected = false;
    }
    
    this.selectedChild = child;
    this.selectedChild.selected = true;
    console.log(this.selectedChild)
    this.router.navigate(['/childinfo'])
    
  }

  sendSelectedChildToChildInfo(){
    this.childSelected.emit(this.selectedChild);
    this.selectedChild.selected = false;
    console.log(this.selectedChild)
  }

}
