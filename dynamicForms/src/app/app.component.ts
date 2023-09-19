import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormServiceService } from './form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamicForms';

  dynamicForm!: FormGroup;

  constructor(private fb: FormBuilder, public formService: FormServiceService) { }

  ngOnInit(): void {
    const formStructure = this.formService.getFormStructure();

    let formGroup: Record<string, object> = {};


    formStructure.forEach(control => {
      let controlValidators: any[] = [];

      if (control.validations) {
        control.validations.forEach(validation => {
          if (validation.validator === 'required') controlValidators.push(Validators.required);
          if (validation.validator === 'email') controlValidators.push(Validators.email);
        });
      }

      console.log("Validators:", controlValidators)
      formGroup[control.field] = [control.value, controlValidators];
      
    });

    console.log(formGroup);
    this.dynamicForm = this.fb.group(formGroup);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.field);
  ​
    for (let validation of control.validations) {
      if (formControl!.hasError(validation.field)) {
        return validation.message;
      }
    }
  ​
    return '';
  }
}
