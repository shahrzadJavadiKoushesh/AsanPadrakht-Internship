import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() placeholder!: string;
  constructor(public commnetService: CommentService){}

}
