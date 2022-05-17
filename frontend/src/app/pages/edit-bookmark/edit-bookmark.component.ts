import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from '../../models/bookmarks.model';
import { BookmarkService } from '../../services/bookmark.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  bookmark: Bookmark
  
  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const bookmarkId = paramMap.get('id')
      console.log(this.bookmarkService.getBookmark(bookmarkId))
      this.bookmarkService.getBookmark(bookmarkId).subscribe((bookmark:Bookmark) => {
        this.bookmark = bookmark;
      })
    })
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value

    this.bookmarkService.updateBookmark(this.bookmark._id,name,url)
    this.bookmarkService.updateBookmark(this.bookmark._id,name,url).subscribe(() => {
      this.notificationService.show('Bookmark updated!')
    })
  }

  delete() {
    this.bookmarkService.deleteBookmark(this.bookmark._id)
    this.router.navigate(['../'], { relativeTo: this.route })

    this.notificationService.show('Deleted Bookmark')
  }

}
