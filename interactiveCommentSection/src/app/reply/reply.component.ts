import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {

  @Input() data: any;
  @Output() replyAdded = new EventEmitter<any>(); 

  @Input() showReply!: boolean;
  @Output() showReplyChanges = new EventEmitter<boolean>(); 


  constructor(private fb: FormBuilder) { }

  replyInput = this.fb.group({
    reply: [null, [Validators.required]],
    parentId: [null],
  })

  enterReply() {
    console.log("Reply sent")
    let reply = this.replyInput.value.reply;
    console.log(reply);
    const newReply = {
      "id": this.data.comments[0].replies.length + 1,
      "content": reply,
      "createdAt": "just now",
      "score": Math.floor(Math.random() * (100 - 5 + 1) + 5),
      "user": {
        "image": { 
          "png": './images/avatars/image-juliusomo.png',
          "webp": '../assets/images/avatars/image-juliusomo.webp'
        },
        "username": this.data.currentUser.username
      },
    }
    console.log(newReply);
    this.data.comments[0].replies.push(newReply);
    console.log(this.data)
    this.showReply = false;
    this.replyAdded.emit(this.data);
    this.showReplyChanges.emit(this.showReply)
    this.replyInput.reset();
    
  }


}
