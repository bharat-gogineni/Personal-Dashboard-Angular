import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo: Todo
  
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id')
      this.todoService.getTodo(todoId).subscribe((todo:Todo)=>{
        this.todo = todo
      });
    })
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return
    
    this.todoService.updateTodo(this.todo._id, form.value.title).subscribe(() => {
      this.router.navigateByUrl("/todos")
      this.notificationService.show('Todo updated!')
    })
  }
  
}
