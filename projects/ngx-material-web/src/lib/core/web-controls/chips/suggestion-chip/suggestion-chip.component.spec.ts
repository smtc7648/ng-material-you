import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionChipComponent } from './suggestion-chip.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SuggestionChipComponent', () => {
  let component: SuggestionChipComponent;
  let fixture: ComponentFixture<SuggestionChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionChipComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SuggestionChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
