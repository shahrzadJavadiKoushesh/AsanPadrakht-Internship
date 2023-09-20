import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor() { }

  formStructure = [
    {
      "field": "name",
      "label": "Name",
      "type": "text",
      "hidden": "false",
      "value": '',
      "mandatory": true,
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Name is required"
        }
      ]
    },
    {
      "field": "email",
      "label": "Email",
      "type": "email",
      "hidden": "false",
      "value": '',
      "mandatory": true,
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Email is required"
        },
        {
          "name": "pattern",
          "validator": "email",
          "message": "Invalid email format"
        }
      ]
    },
    {
      "field": "confirm",
      "label": "Checkbox with confirmation",
      "value": '',
      "type": "checkbox",
      "hidden": "false"
    },
    {
      "field": "hiddenField",
      "label": "",
      "type": "text",
      "value": '',
      "hidden": "true",
      "mandatory": false
    }
  ]

  getFormStructure() {

    return this.formStructure;
  }
}
