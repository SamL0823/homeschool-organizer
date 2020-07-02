import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/child.model';

@Component({
  selector: 'app-childinfo',
  templateUrl: './childinfo.component.html',
  styleUrls: ['./childinfo.component.css']
})
export class ChildinfoComponent implements OnInit {

  @Input() currentChild: Child;

  constructor() { }

  ngOnInit(): void {
  }

 

}
