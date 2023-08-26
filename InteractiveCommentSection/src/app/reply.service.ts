import { Injectable } from '@angular/core';
import { Reply } from './models/reply.model';
import { Comment } from './models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  private comments: Comment[] = [];
  private replyIdCounter = 1;

  generateUniqueId(): number {
    return this.replyIdCounter++;
  }


  constructor() { }

  createReply(commentId: number, reply: Reply): void {
    const comment = this.comments.find(comment => comment.id === commentId);
    if (comment) {
      // Generate a unique ID for the new reply
      reply.id = this.generateUniqueId();
  
      // Add the reply to the replies array of the comment
      comment.replies.push(reply);
    }
  }

  getReplies(commentId: number): Reply[] | undefined {
    const comment = this.comments.find(comment => comment.id === commentId);
    return comment ? comment.replies : undefined;
  }

  updateReply(commentId: number, updatedReply: Reply): void {
    const comment = this.comments.find(comment => comment.id === commentId);
    if (comment) {
      const replyIndex = comment.replies.findIndex(reply => reply.id === updatedReply.id);
      if (replyIndex !== -1) {
        comment.replies[replyIndex] = updatedReply;
      }
    }
  }

  deleteReply(commentId: number, replyId: number): void {
    const comment = this.comments.find(comment => comment.id === commentId);
    if (comment) {
      const replyIndex = comment.replies.findIndex(reply => reply.id === replyId);
      if (replyIndex !== -1) {
        comment.replies.splice(replyIndex, 1);
      }
    }
  }
  
  
}
