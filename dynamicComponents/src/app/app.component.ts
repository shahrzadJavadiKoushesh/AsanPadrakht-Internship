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
  [key: string]: Type<any>;
}

const componentMap: ComponentMapping = {
  'confirm-checkbox-input': ConfirmCheckboxInputComponent,
  'email-text-input': EmailTextInputComponent,
  'name-text-input': NameTextInputComponent,
  'radiobutton-input': RadiobuttonInputComponent,
  'size-range-input': SizeRangeInputComponent,
};

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
  ngOnInit() {
    const componentNames = [
      'confirm-checkbox-input',
      'email-text-input',
      'name-text-input',
      'radiobutton-input',
      'size-range-input',
    ];

    for (const componentName of componentNames) {
      
      const componentType = componentMap[componentName];

      this.createComponent(componentType);
    }
  }

  createComponent(componentType: Type<any>) {
  
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    // instance of the component
    const componentRef = factory.create(this.viewContainerRef.parentInjector);

    // Attach the component to the view container
    this.viewContainerRef.insert(componentRef.hostView);

  }

  submitForm() {
    this.formService.formStructure[0].value = this.userDataService.userName
    this.userData.name = this.formService.formStructure[0].value;
    
    console.log('User Data:', this.userData);
  
    console.log('userName:', this.userData.name);
  }
  
}
