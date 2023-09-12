import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multiStepForm';

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  forthFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.firstFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required,]
    });
  }


}
