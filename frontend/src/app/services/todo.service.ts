import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private webReqService: WebRequestService) { }


  getTodos() {
    return this.webReqService.get('todo');
  }
  
  getTodo(id:string){
    return this.webReqService.get(`todo/${id}`);
  }

  createTodo(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('todo', { title:title });
  }

  updateTodo(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`todo/${id}`, { title:title });
  }

  deleteTodo(id: string) {
    return this.webReqService.delete(`todo/${id}`);
  }
  complete(todo: Todo) {
    return this.webReqService.patch(`todo/${todo._id}`, {
      completed: !todo.completed,
      title: todo.title
    });
  }
}
