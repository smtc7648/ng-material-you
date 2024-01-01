import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerComponent } from './divider.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DividerComponent', () => {
  let component: DividerComponent;
  let fixture: ComponentFixture<DividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
