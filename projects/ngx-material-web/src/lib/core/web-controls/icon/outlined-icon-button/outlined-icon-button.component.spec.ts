import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedIconButtonComponent } from './outlined-icon-button.component';

describe('OutlinedIconButtonComponent', () => {
  let component: OutlinedIconButtonComponent;
  let fixture: ComponentFixture<OutlinedIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlinedIconButtonComponent]
    });
    fixture = TestBed.createComponent(OutlinedIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
