import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  todos = [
    { id: 1, description: 'this is a test'},
    { id: 2, description: 'nothing'},
    { id: 3, description: 'Lesson learnt'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
