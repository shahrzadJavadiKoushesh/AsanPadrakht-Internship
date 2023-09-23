import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeRangeInputComponent } from './size-range-input.component';

describe('SizeRangeInputComponent', () => {
  let component: SizeRangeInputComponent;
  let fixture: ComponentFixture<SizeRangeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizeRangeInputComponent]
    });
    fixture = TestBed.createComponent(SizeRangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
