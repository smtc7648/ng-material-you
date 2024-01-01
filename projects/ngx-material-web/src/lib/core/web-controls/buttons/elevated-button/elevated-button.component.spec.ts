import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatedButtonComponent } from './elevated-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ElevatedButtonComponent', () => {
  let component: ElevatedButtonComponent;
  let fixture: ComponentFixture<ElevatedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElevatedButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ElevatedButtonComponent);
    component = fixture.componentInstance;
    component.ariaLabel = 'test aria label';
    component.disabled = true;
    component.href = "http://localhost:4200";
    component.target = "_blank";
    component.trailingIcon = true;
    component.hasIcon = true;
    fixture.detectChanges();
  });

  it(`should create 'ElevatedButtonComponent'`, () => {
    expect(component).toBeTruthy();
  });

  it(`should create 'ngxMdElevatedButton'`, () => {
    expect(component.ngxMdElevatedButton).toBeTruthy();
  })

  it(`should create 'ngxMdElevatedButton' and set aria-lable as 'test aria label'`, () => {
    expect(component.ariaLabel).toBe('test aria label');
    expect(component.ngxMdElevatedButton.nativeElement.ariaLabel).toBe('test aria label');
  })

  it(`should create 'ngxMdElevatedButton' and set disabled as 'true'`, () => {
    expect(component.disabled).toEqual(true);
    expect(component.ngxMdElevatedButton.nativeElement.getAttribute('disabled')).toEqual('true');
  })

  it(`should create 'ngxMdElevatedButton' and set href as 'http://localhost:4200'`, () => {
    expect(component.href).toBe('http://localhost:4200');
    expect(component.ngxMdElevatedButton.nativeElement.getAttribute('href')).toBe('http://localhost:4200');
  })

  it(`should create 'ngxMdElevatedButton' and set target as '_blank'`, () => {
    expect(component.target).toBe('_blank');
    expect(component.ngxMdElevatedButton.nativeElement.getAttribute('target')).toBe('_blank');
  })

  it(`should create 'ngxMdElevatedButton' and set trailingIcon as 'true'`, () => {
    expect(component.trailingIcon).toBe(true);
    expect(component.ngxMdElevatedButton.nativeElement.getAttribute('trailing-icon')).toBe('true');
  })

  it(`should create 'ngxMdElevatedButton' and set hasIcon as 'true'`, () => {
    expect(component.hasIcon).toBe(true);
    expect(component.ngxMdElevatedButton.nativeElement.getAttribute('has-icon')).toBe('true');
  })

  it(`should create 'ngxMdElevatedButton' and set type as 'submit'`, () => {
    // expect(component.type).toBe('submit');
    expect(component.ngxMdElevatedButton.nativeElement.getAttribute('type')).toBe('submit');
  })

  it(`should create 'ngxMdElevatedButton' and set value as ''`, () => {
    expect(component.value).toBe('');
    expect(component.ngxMdElevatedButton.nativeElement.getAttribute('value')).toBe('');
  })
});
