import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-name-text-input',
  templateUrl: './name-text-input.component.html',
  styleUrls: ['./name-text-input.component.scss']
})
export class NameTextInputComponent {

  constructor(public formService: FormServiceService){}

}
