import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  @Input() notFoundMessage: string = "Nothing Found!";

  constructor(public commentService: CommentService){}

}
