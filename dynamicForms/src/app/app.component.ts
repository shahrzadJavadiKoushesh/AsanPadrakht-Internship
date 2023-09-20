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

  isChecked: boolean = false;

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

      formGroup[control.field] = [control.value, controlValidators];
      
    });

    console.log(formGroup);
    this.dynamicForm = this.fb.group(formGroup);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }

  handleChange(event: any, type: string){
    if (type === 'checkbox'){
      console.log(event.target.checked)
    }
    else if(type === 'radio'){
      console.log(event.target.value)
    }
    
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.field);

    for (let validation of control.validations) {

      if (formControl!.hasError(validation.validator)) {
        return validation.message;
      }
    }

    return '';
  }
}
