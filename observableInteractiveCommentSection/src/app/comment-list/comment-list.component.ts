import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: any;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.comments$.subscribe((data) => {
      this.comments = data.comments;
    });
  }
}
