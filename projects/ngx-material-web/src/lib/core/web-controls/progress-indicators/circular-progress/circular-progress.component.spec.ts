import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularProgressComponent } from './circular-progress.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CircularProgressComponent', () => {
  let component: CircularProgressComponent;
  let fixture: ComponentFixture<CircularProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularProgressComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CircularProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
