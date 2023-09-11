import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  
  comments: any;

  radioValue : string = '';

  constructor(public commentService: CommentService) { }

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

  addReply(comment: any) {
    this.commentService.selectedComment = comment;
    this.commentService.showReply = true;
    console.log("selected comment: ", this.commentService.selectedComment)
  }

  checkStatus(event:any){
  if (event.target.checked == true){
     this.radioValue = event.target.value;
    console.log(this.radioValue+ ' is Selected');
  }
  }
}
