import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledTonalIconButtonComponent } from './filled-tonal-icon-button.component';

describe('FilledTonalIconButtonComponent', () => {
  let component: FilledTonalIconButtonComponent;
  let fixture: ComponentFixture<FilledTonalIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledTonalIconButtonComponent]
    });
    fixture = TestBed.createComponent(FilledTonalIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
