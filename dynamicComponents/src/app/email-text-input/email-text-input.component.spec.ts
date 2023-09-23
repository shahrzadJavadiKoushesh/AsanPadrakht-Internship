import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTextInputComponent } from './email-text-input.component';

describe('EmailTextInputComponent', () => {
  let component: EmailTextInputComponent;
  let fixture: ComponentFixture<EmailTextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTextInputComponent]
    });
    fixture = TestBed.createComponent(EmailTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
