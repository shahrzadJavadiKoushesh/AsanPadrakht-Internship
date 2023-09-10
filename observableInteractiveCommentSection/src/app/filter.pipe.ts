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

    const commentsCopy = JSON.parse(JSON.stringify(comments));

    return commentsCopy.filter((comment: any) => {
      if (isUsername) {
        if (comment.user.username.toLowerCase().includes(searchText)) {
          return true;
        }
      } else {
        if (comment.content.toLowerCase().includes(searchText)) {
          return true;
        }
      }

      const repliesCopy = JSON.parse(JSON.stringify(comment.replies));

      // Filter and keep only the matching replies
      const matchingReplies = repliesCopy.filter((reply: any) => {
        if (isUsername) {
          return reply.user.username.toLowerCase().includes(searchText);
        } else {
          return reply.content.toLowerCase().includes(searchText);
        }
      });

      comment.replies = matchingReplies;

      return comments.length > 0;
    });
  }
}