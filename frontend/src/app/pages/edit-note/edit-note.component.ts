import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../../models/notes.model';
import { NoteService } from '../../services/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note
  
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')
      this.noteService.getNote(idParam).subscribe((note:Note) => {
        this.note = note
      });
    })
  }

  onFormSubmit(form: NgForm) {
    this.noteService.updateNote(this.note._id, form.value.title,form.value.text).subscribe(() => {
      this.router.navigateByUrl("/notes")
      this.notificationService.show('Note updated!')
    })
  }

  deleteNote() {
    this.noteService.deleteNote(this.note._id).subscribe(() => {
        this.router.navigateByUrl("/notes")
        this.notificationService.show('Note deleted')
    })
  }

}
