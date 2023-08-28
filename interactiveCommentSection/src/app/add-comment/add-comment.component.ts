import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {

  constructor(private fb: FormBuilder){}

  commentInput = this.fb.group({
    comment: [null, [Validators.required]]
  })

  addComment(){
    console.log("comment sent");
    // comment is what user has entered
    let comment = this.commentInput.value.comment;
    console.log(comment);
    this.commentInput.reset();
  }
}