import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryTabComponent } from './secondary-tab.component';

describe('SecondaryTabComponent', () => {
  let component: SecondaryTabComponent;
  let fixture: ComponentFixture<SecondaryTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryTabComponent]
    });
    fixture = TestBed.createComponent(SecondaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
