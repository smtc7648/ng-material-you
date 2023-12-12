import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledTonalButtonComponent } from './filled-tonal-button.component';

describe('FilledTonalButtonComponent', () => {
  let component: FilledTonalButtonComponent;
  let fixture: ComponentFixture<FilledTonalButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledTonalButtonComponent]
    });
    fixture = TestBed.createComponent(FilledTonalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
