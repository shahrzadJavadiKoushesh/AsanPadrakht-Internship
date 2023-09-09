import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {

  constructor(private fb: FormBuilder){}

  commentInput = this.fb.group({
    comment: [null, [Validators.required]],
    parentId: [null],
  })

}
