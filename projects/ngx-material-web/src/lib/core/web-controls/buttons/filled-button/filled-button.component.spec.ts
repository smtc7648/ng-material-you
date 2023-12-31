import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledButtonComponent } from './filled-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FilledButtonComponent', () => {
  let component: FilledButtonComponent;
  let fixture: ComponentFixture<FilledButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(FilledButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
