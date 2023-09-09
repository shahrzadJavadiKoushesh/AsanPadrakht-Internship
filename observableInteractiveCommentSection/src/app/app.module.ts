import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReplyComponent } from './reply/reply.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    AddCommentComponent,
    ReplyComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
