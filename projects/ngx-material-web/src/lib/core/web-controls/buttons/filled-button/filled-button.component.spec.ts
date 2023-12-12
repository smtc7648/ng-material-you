import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledButtonComponent } from './filled-button.component';

describe('FilledButtonComponent', () => {
  let component: FilledButtonComponent;
  let fixture: ComponentFixture<FilledButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledButtonComponent]
    });
    fixture = TestBed.createComponent(FilledButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
