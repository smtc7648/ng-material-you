import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandedFabComponent } from './branded-fab.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BrandedFabComponent', () => {
  let component: BrandedFabComponent;
  let fixture: ComponentFixture<BrandedFabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandedFabComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(BrandedFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
