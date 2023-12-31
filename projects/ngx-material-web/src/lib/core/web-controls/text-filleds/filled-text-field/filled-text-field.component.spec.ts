import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledTextFieldComponent } from './filled-text-field.component';

describe('FilledTextFieldComponent', () => {
  let component: FilledTextFieldComponent;
  let fixture: ComponentFixture<FilledTextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledTextFieldComponent]
    });
    fixture = TestBed.createComponent(FilledTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
});
