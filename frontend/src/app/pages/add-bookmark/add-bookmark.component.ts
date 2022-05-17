import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from '../../models/bookmarks.model';
import { BookmarkService } from '../../services/bookmark.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(
    private bookmarkService: BookmarkService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value
    this.bookmarkService.createBookmark(name, url).subscribe((bookmark: Bookmark) => {
      this.router.navigateByUrl("/bookmarks")
      this.notificationService.show('Created bookmark!')
    });
  }
}
