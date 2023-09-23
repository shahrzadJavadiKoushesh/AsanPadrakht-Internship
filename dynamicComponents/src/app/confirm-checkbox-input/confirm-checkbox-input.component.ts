import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-confirm-checkbox-input',
  templateUrl: './confirm-checkbox-input.component.html',
  styleUrls: ['./confirm-checkbox-input.component.scss']
})
export class ConfirmCheckboxInputComponent {

  constructor(public formService: FormServiceService){}

}
