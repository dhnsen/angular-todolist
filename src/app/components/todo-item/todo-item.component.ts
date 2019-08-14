import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service'
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    
  }

  //set Dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).Subscribe(todo =>
      console.log(todo));
  }

  onDelete(todo) {
    console.log('delete');
  }
}
