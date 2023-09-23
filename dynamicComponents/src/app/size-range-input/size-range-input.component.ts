import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-size-range-input',
  templateUrl: './size-range-input.component.html',
  styleUrls: ['./size-range-input.component.scss']
})
export class SizeRangeInputComponent {

  constructor(public formService: FormServiceService){}

}
