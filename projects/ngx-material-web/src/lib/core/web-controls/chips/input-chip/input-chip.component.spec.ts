import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChipComponent } from './input-chip.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InputChipComponent', () => {
  let component: InputChipComponent;
  let fixture: ComponentFixture<InputChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputChipComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(InputChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
