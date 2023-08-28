import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {

  constructor(private fb: FormBuilder){}

  @Output() buttonWasClicked = new EventEmitter<object>();

  @Input() addedData!:object

  commentInput = this.fb.group({
    comment: [null, [Validators.required]]
  })

  addComment(){
    console.log("comment sent");
    // comment is what user has entered
    let comment = this.commentInput.value.comment;
    console.log(comment);
    this.addedData = {
    "id": 3,
    "content": comment,
    "createdAt": new Date().toString(),
    "score":  Math.floor(Math.random() * 20),
    "user": {
      "image": { 
        "png": "./images/avatars/image-amyrobson.png",
        "webp": "../assets/images/avatars/image-amyrobson.webp"
      },
      "username": "amyrobson"
    },
    "replies": []
    }
    this.buttonWasClicked.emit();
    console.log(this.addedData)
    this.commentInput.reset();
  }
}