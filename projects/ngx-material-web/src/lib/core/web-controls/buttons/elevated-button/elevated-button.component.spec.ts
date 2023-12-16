import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatedButtonComponent } from './elevated-button.component';

describe('ElevatedButtonComponent', () => {
  let component: ElevatedButtonComponent;
  let fixture: ComponentFixture<ElevatedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElevatedButtonComponent]
    });
    fixture = TestBed.createComponent(ElevatedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
