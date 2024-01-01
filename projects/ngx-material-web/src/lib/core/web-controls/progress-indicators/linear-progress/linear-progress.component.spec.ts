import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearProgressComponent } from './linear-progress.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LinearProgressComponent', () => {
  let component: LinearProgressComponent;
  let fixture: ComponentFixture<LinearProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearProgressComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(LinearProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
