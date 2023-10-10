import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-size-range-input',
  templateUrl: './size-range-input.component.html',
  styleUrls: ['./size-range-input.component.scss']
})
export class SizeRangeInputComponent {

  
  @Input() value: string = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();


  constructor(public formService: FormServiceService, public userDataService: UserDataService){
  
  }

  onValueChange(){
    this.valueChange.emit(this.value)
  }

}
