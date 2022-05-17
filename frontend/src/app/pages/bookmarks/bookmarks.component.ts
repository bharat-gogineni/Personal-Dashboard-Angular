import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../models/bookmarks.model';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Bookmark[];
  
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarkService.getBookmarks().subscribe((bookmarks: Bookmark[]) => {
      this.bookmarks = bookmarks;
    })
  }
}