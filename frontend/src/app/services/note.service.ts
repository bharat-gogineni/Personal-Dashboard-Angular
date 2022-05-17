import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Note } from '../models/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private webReqService: WebRequestService) { }


  getNotes() {
    return this.webReqService.get('notes');
  }
  
  getNote(id:string){
    return this.webReqService.get(`notes/${id}`);
  }

  createNote(title: string,text: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('notes', { title:title,text: text });
  }

  updateNote(id: string, title: string,text: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`notes/${id}`, { title:title,text: text });
  }

  deleteNote(id: string) {
    return this.webReqService.delete(`notes/${id}`);
  }
}
