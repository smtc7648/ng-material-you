import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionChipComponent } from './suggestion-chip.component';

describe('SuggestionChipComponent', () => {
  let component: SuggestionChipComponent;
  let fixture: ComponentFixture<SuggestionChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionChipComponent]
    });
    fixture = TestBed.createComponent(SuggestionChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
