import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationComponent } from './elevation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ElevationComponent', () => {
  let component: ElevationComponent;
  let fixture: ComponentFixture<ElevationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElevationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ElevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
