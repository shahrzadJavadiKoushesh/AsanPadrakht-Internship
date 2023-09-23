import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonInputComponent } from './radiobutton-input.component';

describe('RadiobuttonInputComponent', () => {
  let component: RadiobuttonInputComponent;
  let fixture: ComponentFixture<RadiobuttonInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadiobuttonInputComponent]
    });
    fixture = TestBed.createComponent(RadiobuttonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
