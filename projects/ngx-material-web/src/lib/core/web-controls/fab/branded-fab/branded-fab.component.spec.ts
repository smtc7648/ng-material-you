import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandedFabComponent } from './branded-fab.component';

describe('BrandedFabComponent', () => {
  let component: BrandedFabComponent;
  let fixture: ComponentFixture<BrandedFabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandedFabComponent]
    });
    fixture = TestBed.createComponent(BrandedFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
