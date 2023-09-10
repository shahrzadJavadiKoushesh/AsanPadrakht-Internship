import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multiSetForm';

  activedStep = 0;

  steps: StepType[] = [
    {
      label: 'Personal info',
      fields: [
        {
          key: 'Name',
          type: 'input',
          templateOptions: {
            label: 'name',
            required: true,
          },
        },
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'email',
            required: true,
          },
        },
        {
          key: 'Phone Number',
          type: 'input',
          templateOptions: {
            type: 'tel',
            label: 'phone',
            required: true,
          },
        },
      ],
    },
  ];
}
