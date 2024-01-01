import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledIconButtonComponent } from './filled-icon-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FilledIconButtonComponent', () => {
  let component: FilledIconButtonComponent;
  let fixture: ComponentFixture<FilledIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledIconButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(FilledIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
