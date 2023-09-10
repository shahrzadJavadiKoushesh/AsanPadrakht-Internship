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
      if (isUsername){
        if (comment.user.username.toLowerCase().includes(searchText)){
          return true
        }
        if (comment.replies.length > 0){
          if (comment.replies.some((reply: any) => reply.user.username.toLowerCase().includes(searchText))) {
            return true;
          }
        }
      } else {
        return (
          comment.content.toLowerCase().includes(searchText)
        );
      }
    });
  }
}


