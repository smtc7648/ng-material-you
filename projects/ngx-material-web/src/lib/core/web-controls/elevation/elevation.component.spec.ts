import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationComponent } from './elevation.component';

describe('ElevationComponent', () => {
  let component: ElevationComponent;
  let fixture: ComponentFixture<ElevationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElevationComponent]
    });
    fixture = TestBed.createComponent(ElevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
