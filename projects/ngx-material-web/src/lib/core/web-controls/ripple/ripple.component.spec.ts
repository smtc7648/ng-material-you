import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleComponent } from './ripple.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RippleComponent', () => {
  let component: RippleComponent;
  let fixture: ComponentFixture<RippleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RippleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(RippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
