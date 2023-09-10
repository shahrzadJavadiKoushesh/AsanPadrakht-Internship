import { Pipe, PipeTransform } from '@angular/core';
import { CommentService } from './comment.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor (public commentService: CommentService){}
  transform(comments: any[], searchText: string, isUsername: boolean): any[] {
    if (!comments || !searchText) {
      return comments;
    }

    searchText = searchText.toLowerCase();

    let commentsCopy = JSON.parse(JSON.stringify(comments));

    return commentsCopy.filter((comment: any) => {
      if (isUsername) {
        if (comment.user.username.toLowerCase().includes(searchText)) {
          return true;
        }
        else{
          this.commentService.notFoundVisible = true;
        }
      } else {
        if (comment.content.toLowerCase().includes(searchText)) {
          return true;
        }
        else{
          this.commentService.notFoundVisible = true;
        }
      }

      const repliesCopy = JSON.parse(JSON.stringify(comment.replies));

      const matchingReplies = repliesCopy.filter((reply: any) => {
        if (isUsername) {
          return reply.user.username.toLowerCase().includes(searchText);
        } else {
          return reply.content.toLowerCase().includes(searchText);
        }
      });

      comment.replies = matchingReplies;
      if (searchText.trim() === ''){
        console.log("GHJKL")
        this.commentService.notFoundVisible = false;
      }
      return comment.replies.length > 0 && this.commentService.notFoundVisible;
    });
  }
}