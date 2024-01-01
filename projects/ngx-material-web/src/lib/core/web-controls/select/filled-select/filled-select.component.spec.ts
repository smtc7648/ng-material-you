import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledSelectComponent } from './filled-select.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FilledSelectComponent', () => {
  let component: FilledSelectComponent;
  let fixture: ComponentFixture<FilledSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledSelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(FilledSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
