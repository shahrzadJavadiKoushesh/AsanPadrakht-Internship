import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTextInputComponent } from './name-text-input.component';

describe('NameTextInputComponent', () => {
  let component: NameTextInputComponent;
  let fixture: ComponentFixture<NameTextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameTextInputComponent]
    });
    fixture = TestBed.createComponent(NameTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
