import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-radiobutton-input',
  templateUrl: './radiobutton-input.component.html',
  styleUrls: ['./radiobutton-input.component.scss']
})
export class RadiobuttonInputComponent {

  constructor (public formService: FormServiceService){}
}
