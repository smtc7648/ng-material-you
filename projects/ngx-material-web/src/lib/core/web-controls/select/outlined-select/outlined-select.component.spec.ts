import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedSelectComponent } from './outlined-select.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OutlinedSelectComponent', () => {
  let component: OutlinedSelectComponent;
  let fixture: ComponentFixture<OutlinedSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlinedSelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(OutlinedSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
