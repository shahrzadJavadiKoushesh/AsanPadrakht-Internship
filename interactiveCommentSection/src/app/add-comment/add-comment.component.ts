import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent {

  @Input() data: any;
  @Output() commentAdded = new EventEmitter<any>();

  constructor(private fb: FormBuilder){}

  commentInput = this.fb.group({
    comment: [null, [Validators.required]],
    parentId: [null],
  })

  addComment(){
    console.log("comment sent");
    // comment is what user has entered
    let comment = this.commentInput.value.comment;
    const parentId = this.commentInput.value.parentId;
    console.log(comment);
    const newComment = {
      "id": this.data.comments.length + 1,
      "content": comment,
      "createdAt": "just now",
      "score": Math.floor(Math.random() * (100 - 5 + 1) + 5),
      "user": {
        "image": { 
          "png": './images/avatars/image-juliusomo.png',
          "webp": '../assets/images/avatars/image-juliusomo.webp'
        },
        "username": this.data.currentUser.username
      },
      "replies": []
    }
    if (parentId) {
      // Find the comment or reply with the matching id and add the new reply
      const parent = this.findCommentOrReply(this.data, parentId);
      if (parent) {
        parent.replies.push(newComment);
      }
    } else {
      // Add a new comment
      this.data.comments.push(newComment);
    }
    console.log(this.data)
    this.commentAdded.emit(this.data);
    this.commentInput.reset();    
  }
  
  findCommentOrReply(item: any, id: number): any {
    if (item.id === id) {
      return item;
    } else if (item.replies && item.replies.length > 0) {
      for (const reply of item.replies) {
        const found = this.findCommentOrReply(reply, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
}