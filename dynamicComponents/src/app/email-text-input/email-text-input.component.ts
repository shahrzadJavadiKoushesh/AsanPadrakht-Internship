import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-email-text-input',
  templateUrl: './email-text-input.component.html',
  styleUrls: ['./email-text-input.component.scss']
})
export class EmailTextInputComponent {
  userEmail = ''

  @Input() value: string = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();


  constructor(public formService: FormServiceService, public userDataService: UserDataService){
  
  }

  onValueChange(){
    this.valueChange.emit(this.value)
  }

}
