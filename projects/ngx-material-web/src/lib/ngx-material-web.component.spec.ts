import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialWebComponent } from './ngx-material-web.component';

describe('NgxMaterialWebComponent', () => {
  let component: NgxMaterialWebComponent;
  let fixture: ComponentFixture<NgxMaterialWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMaterialWebComponent]
    });
    fixture = TestBed.createComponent(NgxMaterialWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
