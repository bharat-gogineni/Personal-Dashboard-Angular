import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  showValidationErrors: boolean
  
  constructor(
    private todoService: TodoService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true
    this.todoService.createTodo(form.value.text).subscribe((todo: Todo) => {
      this.router.navigateByUrl('/todos')
      this.notificationService.show('Todo created!')
    });
  }

}
