import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistChipComponent } from './assist-chip.component';

describe('AssistChipComponent', () => {
  let component: AssistChipComponent;
  let fixture: ComponentFixture<AssistChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistChipComponent]
    });
    fixture = TestBed.createComponent(AssistChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
