import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { ConfirmCheckboxInputComponent } from './confirm-checkbox-input/confirm-checkbox-input.component';
import { EmailTextInputComponent } from './email-text-input/email-text-input.component';
import { NameTextInputComponent } from './name-text-input/name-text-input.component';
import { RadiobuttonInputComponent } from './radiobutton-input/radiobutton-input.component';
import { SizeRangeInputComponent } from './size-range-input/size-range-input.component';
import { ButtonComponent } from './button/button.component';
import { Type } from '@angular/core';

interface ComponentMapping {
  [key: string]: Type<any>;
}

const componentMap: ComponentMapping = {
  'confirm-checkbox-input': ConfirmCheckboxInputComponent,
  'email-text-input': EmailTextInputComponent,
  'name-text-input': NameTextInputComponent,
  'radiobutton-input': RadiobuttonInputComponent,
  'size-range-input': SizeRangeInputComponent,
  'button': ButtonComponent
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamicComponents';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }
  ngOnInit() {
    const componentNames = [
      'confirm-checkbox-input',
      'email-text-input',
      'name-text-input',
      'radiobutton-input',
      'size-range-input',
      'button'
    ];

    for (const componentName of componentNames) {
      // Get the component type from the mapping
      const componentType = componentMap[componentName];

      this.createComponent(componentType);
    }
  }

  createComponent(componentType: Type<any>) {
    // Use ComponentFactoryResolver to create a component factory
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    // Create an instance of the component
    const componentRef = factory.create(this.viewContainerRef.parentInjector);

    // Attach the component to the view container
    this.viewContainerRef.insert(componentRef.hostView);

  }
}
