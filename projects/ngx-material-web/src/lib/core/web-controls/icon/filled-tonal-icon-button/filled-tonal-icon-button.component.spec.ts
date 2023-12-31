import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledTonalIconButtonComponent } from './filled-tonal-icon-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FilledTonalIconButtonComponent', () => {
  let component: FilledTonalIconButtonComponent;
  let fixture: ComponentFixture<FilledTonalIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledTonalIconButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(FilledTonalIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
