import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabComponent } from './fab.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FabComponent', () => {
  let component: FabComponent;
  let fixture: ComponentFixture<FabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(FabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
