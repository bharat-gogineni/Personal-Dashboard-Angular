import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../models/bookmarks.model';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss']
})
export class ManageBookmarksComponent implements OnInit {

  bookmarks: Bookmark[];
  
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarkService.getBookmarks().subscribe((bookmarks: Bookmark[]) => {
      this.bookmarks = bookmarks;
    })
  }

}
