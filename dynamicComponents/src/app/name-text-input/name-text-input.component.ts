import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-name-text-input',
  templateUrl: './name-text-input.component.html',
  styleUrls: ['./name-text-input.component.scss']
})
export class NameTextInputComponent {

  userName: string = '';

  @Input() value: string = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(public formService: FormServiceService,public userDataServic: UserDataService){
  
  }

  onValueChange(){
    this.valueChange.emit(this.value)
  }
}
