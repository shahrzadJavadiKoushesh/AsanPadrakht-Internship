import { Injectable } from '@angular/core';
import { Comment } from './models/comment.model';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments: Comment[] = [];
  private commentIdCounter = 1;

  generateUniqueId(): number {
    return this.commentIdCounter++;
  }

  constructor() { }

  createComment(commentText: string): void {
    const newComment: Comment = {
      id: this.generateUniqueId(),
      content: commentText,
      replies: []
    };
    this.comments.push(newComment);
  }

  getComments(): Comment[] {
    return this.comments;
  }

  updateComment(updatedComment: Comment): void {
    const index = this.comments.findIndex(comment => comment.id === updatedComment.id);
    if (index !== -1) {
      this.comments[index] = updatedComment;
    }
  }

  deleteComment(commentId: number): void {
    const index = this.comments.findIndex(comment => comment.id === commentId);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
}
