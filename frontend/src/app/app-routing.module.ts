import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { AddBookmarkComponent } from './pages/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './pages/manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './pages/edit-bookmark/edit-bookmark.component';
import { TodosComponent } from './pages/todos/todos.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { HtmlParser } from '@angular/compiler';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'home', component: HomeComponent ,children:[
  { path: 'new-list', component: NewListComponent,outlet: 'outlet' },
  { path: 'edit-list/:listId', component: EditListComponent,outlet: 'outlet' },
  { path: 'lists', component: TaskViewComponent,outlet: 'outlet' },
  { path: 'lists/:listId', component: TaskViewComponent,outlet: 'outlet' },
  { path: 'lists/:listId/new-task', component: NewTaskComponent,outlet: 'outlet' },
  { path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent,outlet: 'outlet' },
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 },outlet: 'outlet' },
  { path: 'bookmarks/add', component: AddBookmarkComponent,outlet: 'outlet' },
  { path: 'bookmarks/manage', component: ManageBookmarksComponent, children: [
    { path: ':id', component: EditBookmarkComponent,outlet: 'outlet' }
  ] },
  { path: 'todos', component: TodosComponent, data: { tab: 2 },outlet: 'outlet' },
  { path: 'todos/add', component: AddTodoComponent,outlet: 'outlet' },
  { path: 'todos/:id', component: EditTodoComponent,outlet: 'outlet' },
  { path: 'notes', component: NotesComponent, data: { tab: 3 },outlet: 'outlet' },
  { path: 'notes/add', component: AddNoteComponent,outlet: 'outlet' },
  { path: 'notes/:id', component: EditNoteComponent,outlet: 'outlet' }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
