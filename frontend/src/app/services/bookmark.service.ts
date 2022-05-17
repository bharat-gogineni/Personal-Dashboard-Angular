import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Bookmark } from '../models/bookmarks.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private webReqService: WebRequestService) { }


  getBookmarks() {
    return this.webReqService.get('bookmarks');
  }
  getBookmark(id:string){
    return this.webReqService.get(`bookmarks/${id}`);
  }

  createBookmark(title: string,link: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('bookmarks', { title:title,link: link });
  }

  updateBookmark(id: string, title: string,link: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`bookmarks/${id}`, { title:title,link: link });
  }

  deleteBookmark(id: string) {
    return this.webReqService.delete(`bookmarks/${id}`);
  }
}
