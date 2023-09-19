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
      "mandatory": true
    },
    {
      "field": "email",
      "label": "Email",
      "type": "text",
      "hidden": "false",
      "value": '',
      "mandatory": true
    },
    {
      "field": "confirm",
      "label": "Checkbox with confirmation",
      "value": '',
      "type": "check",
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
