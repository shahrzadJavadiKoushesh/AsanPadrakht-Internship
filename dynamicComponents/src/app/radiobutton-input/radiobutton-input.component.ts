import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-radiobutton-input',
  templateUrl: './radiobutton-input.component.html',
  styleUrls: ['./radiobutton-input.component.scss']
})
export class RadiobuttonInputComponent {

  @Input() value: string = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();


  constructor(public formService: FormServiceService, public userDataService: UserDataService){
  
  }

  onValueChange(){
    this.valueChange.emit(this.value)
  }
}
