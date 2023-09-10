import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(comments: any[], searchText: string, isUsername: boolean): any[] {
    if (!comments || !searchText) {
      return comments;
    }
  
    searchText = searchText.toLowerCase();
  
    return comments.filter((comment) => {
      if (isUsername) {
        if (comment.user.username.toLowerCase().includes(searchText)) {
          return true;
        }
      } else {
        if (comment.content.toLowerCase().includes(searchText)) {
          return true;
        }
      }
      const initialReplies = [...comment.replies]
      // Filter and keep only the matching replies
      const matchingReplies = comment.replies.filter((reply: any) => {
        if (isUsername) {
          return reply.user.username.toLowerCase().includes(searchText);
        } else {
          return reply.content.toLowerCase().includes(searchText);
        }
      });
  
      comment.replies = matchingReplies;
      if (searchText.trim() === ''){
        comment.replies = [...initialReplies]
      }
      return comment.replies.length > 0;
    });
  }
  
  
}