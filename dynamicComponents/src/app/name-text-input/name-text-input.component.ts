import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-name-text-input',
  templateUrl: './name-text-input.component.html',
  styleUrls: ['./name-text-input.component.scss']
})
export class NameTextInputComponent {

  userName: string = '';

  constructor(public formService: FormServiceService,public userDataServic: UserDataService){
  
  }

  onUserNameChange() {
    console.log('userName:', this.userName);
  }

  

}
