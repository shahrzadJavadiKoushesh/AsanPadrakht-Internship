import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { ConfirmCheckboxInputComponent } from './confirm-checkbox-input/confirm-checkbox-input.component';
import { EmailTextInputComponent } from './email-text-input/email-text-input.component';
import { NameTextInputComponent } from './name-text-input/name-text-input.component';
import { RadiobuttonInputComponent } from './radiobutton-input/radiobutton-input.component';
import { SizeRangeInputComponent } from './size-range-input/size-range-input.component';
import { Type } from '@angular/core';
import { FormServiceService } from './form-service.service';
import { UserDataService } from './user-data.service';

interface ComponentMapping {
  [key: string]: Type<any>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'dynamicComponents';
  userData: any = {};
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private formService: FormServiceService, 
    private userDataService: UserDataService
  ) { }

   componentMap: ComponentMapping = {
    'confirm': ConfirmCheckboxInputComponent,
    'email': EmailTextInputComponent,
    'name': NameTextInputComponent,
    'radiobutton': RadiobuttonInputComponent,
    'range': SizeRangeInputComponent,
  };
  
  ngOnInit() {
    const componentNames = [
      this.formService.formStructure[2].field,
      this.formService.formStructure[1].field,
      this.formService.formStructure[0].field,
      this.formService.formStructure[5].field,
      this.formService.formStructure[4].field,
    ];

    for (const componentName of componentNames) {
      const componentType = this.componentMap[componentName];
      this.createComponent(componentType, componentName);
    }
  }

  createComponent(componentType: Type<any>, fieldName: string) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = factory.create(this.viewContainerRef.parentInjector);
  
    console.log('Creating component for', fieldName);
  
    const instance = componentRef.instance;
    instance.formStructure = this.formService.formStructure.find(item => item.field === fieldName);
  
    // Attach the component to the view container
    this.viewContainerRef.insert(componentRef.hostView);
  
    instance.valueChange.subscribe((newValue: any) => {
      this.userData[fieldName] = newValue;
    });
  }

  submitForm() {
    console.log('User Data:', this.userData);
  }
  
}
