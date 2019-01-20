import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}
@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  todos = [
    new Todo(1, 'Hello WOrld', true, new Date()),
    new Todo(2, 'nothing', true, new Date()),
    new Todo(3, 'lesson learnt', false, new Date())
  ];
  constructor() { }

  ngOnInit() {
  }

}
