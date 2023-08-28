import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { ReplyFormComponent } from './reply-form/reply-form.component';
import { CommentComponent } from './comment/comment.component';
import { ReplyComponent } from './reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    ReplyFormComponent,
    CommentComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
