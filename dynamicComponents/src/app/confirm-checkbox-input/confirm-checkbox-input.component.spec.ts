import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCheckboxInputComponent } from './confirm-checkbox-input.component';

describe('ConfirmCheckboxInputComponent', () => {
  let component: ConfirmCheckboxInputComponent;
  let fixture: ComponentFixture<ConfirmCheckboxInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmCheckboxInputComponent]
    });
    fixture = TestBed.createComponent(ConfirmCheckboxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
