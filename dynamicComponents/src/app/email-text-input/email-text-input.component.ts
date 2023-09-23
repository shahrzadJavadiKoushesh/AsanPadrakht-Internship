import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-email-text-input',
  templateUrl: './email-text-input.component.html',
  styleUrls: ['./email-text-input.component.scss']
})
export class EmailTextInputComponent {

  constructor(public formService: FormServiceService){}

}
