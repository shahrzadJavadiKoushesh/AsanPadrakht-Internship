import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


interface Option {
  value: string;
  viewValue: string;
}
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newMat';
     
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  Soptions: Option[] = [
    {value: 'arcade-0', viewValue: 'Arcade'},
    {value: 'advanced-1', viewValue: 'Advanced'},
    {value: 'pro-2', viewValue: 'Pro'},
  ];

  Toptions: Option[] = [
    {value: 'onlineservice-0', viewValue: 'Online Service'},
    {value: 'largerstorage-1', viewValue: 'Larger Storage'},
    {value: 'customizableprofile', viewValue: 'Customizable Profile'},
  ]
  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      // console.log(this.secondFormGroup.value);
  }
}