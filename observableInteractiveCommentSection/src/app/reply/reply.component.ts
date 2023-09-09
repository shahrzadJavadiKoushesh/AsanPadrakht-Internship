import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {

  @Input() parentComment: any;

  constructor(private fb: FormBuilder, private commentService: CommentService) { }

  replyInput = this.fb.group({
    reply: [null, [Validators.required]],
    parentId: [null],
  })

  sendReply() {
    const reply = this.replyInput.value.reply;
    const newReply = {
      id: Math.floor(Math.random() * (50 - 6 + 1)) + 6,
      content: reply,
      createdAt: "just now",
      score: Math.floor(Math.random() * (50 - 6 + 1)) + 6,
      replyingTo: "",
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "../assets/images/avatars/image-juliusomo.webp"
        },
        username: "juliusomo"
      }
    };
    this.commentService.selectedComment.replies.push(newReply)
    this.commentService.addReply();
    console.log(this.commentService.commentsSubject.value)
    this.commentService.showReply = false;
    this.replyInput.reset();
  }

}
