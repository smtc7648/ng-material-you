import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevatedButtonComponent } from './buttons/elevated-button/elevated-button.component';
import { OutlinedButtonComponent } from './buttons/outlined-button/outlined-button.component';
import { TextButtonComponent } from './buttons/text-button/text-button.component';
import { FilledButtonComponent } from './buttons/filled-button/filled-button.component';
import { FilledTonalButtonComponent } from './buttons/filled-tonal-button/filled-tonal-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

import "@material/web/button/elevated-button";
import "@material/web/button/filled-button"
import "@material/web/button/filled-tonal-button";
import "@material/web/button/outlined-button";
import "@material/web/button/text-button";

import '@material/web/checkbox/checkbox'

@NgModule({
  declarations: [
    ElevatedButtonComponent,
    OutlinedButtonComponent,
    TextButtonComponent,
    FilledButtonComponent,
    FilledTonalButtonComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElevatedButtonComponent,
    FilledButtonComponent,
    FilledTonalButtonComponent,
    OutlinedButtonComponent,
    TextButtonComponent,
    CheckboxComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WebControlsModule { }
