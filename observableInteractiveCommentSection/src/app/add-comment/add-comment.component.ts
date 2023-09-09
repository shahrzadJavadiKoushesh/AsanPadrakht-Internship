import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {

  constructor(private fb: FormBuilder, private commentService: CommentService){}

  commentInput = this.fb.group({
    comment: [null, [Validators.required]],
    parentId: [null],
  })

  addComment(){
    console.log("comment sent");
    // comment is what user has entered
    let comment = this.commentInput.value.comment;
    console.log(comment);
    const data = {
      "id": Math.floor(Math.random() * (50 - 6 + 1)) + 6 ,
      "content": comment,
      "createdAt": "just now",
      "score": Math.floor(Math.random() * (50 - 6 + 1)) + 100,
      "replyingTo": "ramsesmiron",
      "user": {
        "image": {
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "../assets/images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      },
      "replies": []
    }
    console.log(this.commentService.commentsSubject.value)
    this.commentService.addComment(data);
    this.commentInput.reset();    
  }

}
