import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {

  constructor(private fb: FormBuilder) { }

  replyInput = this.fb.group({
    reply: [null, [Validators.required]],
    parentId: [null],
  })

}
