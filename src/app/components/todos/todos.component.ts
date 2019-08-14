import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'first todo',
        complete: false
      },
      {
        id: 2,
        title: 'second todo',
        complete: true
      },
      {
        id: 3,
        title: 'third todo',
        complete: false
      }
    ]
  }

}
