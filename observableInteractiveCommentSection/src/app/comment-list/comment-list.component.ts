import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: any;

  showReply: boolean = false;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.comments$.subscribe((data) => {
      this.comments = data.comments;
    });
  }

  changeScore(comment: any, isPlus: boolean) {
    if (isPlus) {
      comment.score++;
    } else {
      if (comment.score > 0) {
        comment.score--;
      }
    }
  }

  addReply(){
    console.log("Reply clicked");
    this.showReply = true;
  }
}
