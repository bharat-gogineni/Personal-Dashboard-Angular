import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../../models/bookmarks.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookmark: Bookmark

  tileIconSrc: string

  faviconError: boolean
  
  constructor() { }

  ngOnInit(): void {
    var url = new URL(this.bookmark.link)
    this.tileIconSrc = url.origin + '/favicon.ico'
  }

}
