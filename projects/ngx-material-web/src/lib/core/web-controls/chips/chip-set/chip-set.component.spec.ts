import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipSetComponent } from './chip-set.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ChipSetComponent', () => {
  let component: ChipSetComponent;
  let fixture: ComponentFixture<ChipSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipSetComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ChipSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
