import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-confirm-checkbox-input',
  templateUrl: './confirm-checkbox-input.component.html',
  styleUrls: ['./confirm-checkbox-input.component.scss']
})
export class ConfirmCheckboxInputComponent {

  @Input() value: string = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  

  constructor(public formService: FormServiceService,public userDataServic: UserDataService){
  
  }

  onValueChange(){
    this.valueChange.emit(this.value)
  }

}
