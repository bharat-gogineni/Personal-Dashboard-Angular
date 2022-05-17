import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class TodosComponent implements OnInit {

  todos: any;

  constructor(private todoService: TodoService,private notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    })
  }

  toggleCompleted(todo: Todo) {
    this.todoService.complete(todo).subscribe(()=>{
      this.notificationService.show("Congrats one task down!");
      this.todoService.getTodos().subscribe((todos: Todo[]) => {
        this.todos = todos;
      })
    })
  }

  onEditClick(todo: Todo) {
    this.router.navigate(['/todos', todo._id])
  }

  onDeleteClick(todo: Todo) {
    this.todoService.deleteTodo(todo._id).subscribe(()=>{
      this.router.navigateByUrl("/todos")
      this.notificationService.show('Todo Deleted!')
    })
  }

  trackById(index, item: Todo) {
    return item._id
  }

}
