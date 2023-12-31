import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedTextFieldComponent } from './outlined-text-field.component';

describe('OutlinedTextFieldComponent', () => {
  let component: OutlinedTextFieldComponent;
  let fixture: ComponentFixture<OutlinedTextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlinedTextFieldComponent]
    });
    fixture = TestBed.createComponent(OutlinedTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
