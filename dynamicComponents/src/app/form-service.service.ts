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
      "value": false,
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
    },

    {
      "field": "range",
      "label": "Size",
      "type": "range",
      "value": "",
      "options": {
        "min": "0",
        "max": "100",
        "step": "1",
        "icon": "sunny"
      },
      "hidden": "false",
      "validations": []
    },

    {
      "field": "radiobutton",
      "label": "radio button",
      "type": "radio",
      "value": "radio 1",
      "hidden": "false",
    },

    {
      "field": "radiobutton",
      "label": "radio button",
      "type": "radio",
      "value": "radio 2",
      "hidden": "false",
    },
    
  ]

}
