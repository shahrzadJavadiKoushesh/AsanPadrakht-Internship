import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  showReply: boolean = false;
  searchText: string = '';
  selectedComment!: {
    "id": number,
    "content":string | undefined | null,
    "createdAt": string,
    "score": number,
    "user": {
      "image": {
        "png": string,
        "webp": string
      },
      "username": string
    },
    "replies": [{
      "id": number,
      "content": string | undefined | null,
      "createdAt": string,
      "score": number,
      "replyingTo": string,
      "user": {
        "image": {
          "png": string,
          "webp": string
        },
        "username": string
      }
    }]
  }
  public commentsSubject = new BehaviorSubject<any>(null);
  comments$: Observable<any> = this.commentsSubject.asObservable();

  constructor() {
    this.commentsSubject.next({
      "currentUser": {
        "image": {
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "../assets/images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      },
      "comments": [
        {
          "id": 1,
          "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
          "createdAt": "1 month ago",
          "score": 12,
          "user": {
            "image": {
              "png": "./images/avatars/image-amyrobson.png",
              "webp": "../assets/images/avatars/image-amyrobson.webp"
            },
            "username": "amyrobson"
          },
          "replies": []
        },
        {
          "id": 2,
          "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
          "createdAt": "2 weeks ago",
          "score": 5,
          "user": {
            "image": {
              "png": "./images/avatars/image-maxblagun.png",
              "webp": "../assets/images/avatars/image-maxblagun.webp"
            },
            "username": "maxblagun"
          },
          "replies": [
            {
              "id": 3,
              "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
              "createdAt": "1 week ago",
              "score": 4,
              "replyingTo": "maxblagun",
              "user": {
                "image": {
                  "png": "./images/avatars/image-ramsesmiron.png",
                  "webp": "../assets/images/avatars/image-ramsesmiron.webp"
                },
                "username": "ramsesmiron"
              }
            },
            {
              "id": 4,
              "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
              "createdAt": "2 days ago",
              "score": 2,
              "replyingTo": "ramsesmiron",
              "user": {
                "image": {
                  "png": "./images/avatars/image-juliusomo.png",
                  "webp": "../assets/images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo"
              }
            },
            {
              "id": 5,
              "content": "Wow, this React app's user interface is so responsive and sleek, making for an amazing user experience!",
              "createdAt": "1 day ago",
              "score": 2,
              "replyingTo": "ramsesmiron",
              "user": {
                "image": {
                  "png": "./images/avatars/image-juliusomo.png",
                  "webp": "../assets/images/avatars/image-amyrobson.webp"
                },
                "username": "amyrobson"
              }
            },
            {
              "id": 6,
              "content": "viverra fermentum metus elementum, ornare",
              "createdAt": "1 month ago",
              "score": 0,
              "replyingTo": "ramsesmiron",
              "user": {
                "image": {
                  "png": "./images/avatars/image-juliusomo.png",
                  "webp": "../assets/images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo"
              }
            }
          ]
        },
        {
          "id": 1,
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lacinia dui. Suspendisse volutpat leo at ipsum porta malesuada. Mauris efficitur pellentesque dui,",
          "createdAt": "1 month ago",
          "score": 12,
          "user": {
            "image": {
              "png": "./images/avatars/image-amyrobson.png",
              "webp": "../assets/images/avatars/image-amyrobson.webp"
            },
            "username": "amyrobson"
          },
          "replies": []
        },
      ]
    });
  }

  addComment(newComment: any){
    const lastComments = this.commentsSubject.value;
    lastComments.comments.push(newComment);
    this.commentsSubject.next(lastComments);
  }

  addReply() {
    const lastComments = this.commentsSubject.value;

    let editedComment = lastComments.comments.find( (item: any) => {
      return item.id === this.selectedComment.id
    });
    if(editedComment) {
      editedComment = this.selectedComment;
    }
    this.commentsSubject.next(lastComments);
  }
}
