import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormServiceService } from './form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dynamicForms';

  dynamicForm!: FormGroup;

  constructor(private fb: FormBuilder, public formService: FormServiceService){}

  ngOnInit(): void {
    const formStructure = this.formService.getFormStructure();

    let formGroup : Record<string, string> = {};

    formStructure.forEach(control => {
      formGroup[control.label] = control.value;
    });

    this.dynamicForm = this.fb.group(formGroup);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
