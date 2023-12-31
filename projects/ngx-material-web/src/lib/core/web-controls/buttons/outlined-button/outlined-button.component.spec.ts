import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedButtonComponent } from './outlined-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OutlinedButtonComponent', () => {
  let component: OutlinedButtonComponent;
  let fixture: ComponentFixture<OutlinedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlinedButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(OutlinedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
