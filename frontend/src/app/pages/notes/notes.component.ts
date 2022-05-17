import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/notes.model';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[];
  
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    })
  }
}
