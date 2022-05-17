import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WebReqInterceptor } from './services/web-req.interceptor';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotesComponent } from './pages/notes/notes.component';
import { BookmarkTileComponent } from './pages/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { NoteCardComponent } from './pages/note-card/note-card.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { TodoItemComponent } from './pages/todo-item/todo-item.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './pages/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './pages/manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './pages/edit-bookmark/edit-bookmark.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    LoginPageComponent,
    SignupPageComponent,
    EditListComponent,
    EditTaskComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    EditBookmarkComponent,
    NotificationComponent,
    QuoteBoxComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
