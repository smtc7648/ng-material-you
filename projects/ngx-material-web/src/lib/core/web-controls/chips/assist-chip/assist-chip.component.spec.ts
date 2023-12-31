import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistChipComponent } from './assist-chip.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AssistChipComponent', () => {
  let component: AssistChipComponent;
  let fixture: ComponentFixture<AssistChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistChipComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AssistChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
