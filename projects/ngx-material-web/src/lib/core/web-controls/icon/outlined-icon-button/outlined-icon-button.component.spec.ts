import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedIconButtonComponent } from './outlined-icon-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OutlinedIconButtonComponent', () => {
  let component: OutlinedIconButtonComponent;
  let fixture: ComponentFixture<OutlinedIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlinedIconButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(OutlinedIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
