import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedButtonComponent } from './outlined-button.component';

describe('OutlinedButtonComponent', () => {
  let component: OutlinedButtonComponent;
  let fixture: ComponentFixture<OutlinedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlinedButtonComponent]
    });
    fixture = TestBed.createComponent(OutlinedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
