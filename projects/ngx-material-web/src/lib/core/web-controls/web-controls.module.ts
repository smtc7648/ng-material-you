import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextButtonComponent } from './buttons/text-button/text-button.component';
import { ElevatedButtonComponent } from './buttons/elevated-button/elevated-button.component';
import { FilledButtonComponent } from './buttons/filled-button/filled-button.component';
import { FilledTonalButtonComponent } from './buttons/filled-tonal-button/filled-tonal-button.component';
import { OutlinedButtonComponent } from './buttons/outlined-button/outlined-button.component';
import "@material/web/button/elevated-button";
import "@material/web/button/filled-button"
import "@material/web/button/filled-tonal-button";
import "@material/web/button/outlined-button";
import "@material/web/button/text-button";

import { CheckboxComponent } from './checkbox/checkbox.component';
import '@material/web/checkbox/checkbox';

import { AssistChipComponent } from './chips/assist-chip/assist-chip.component'
import { FilterChipComponent } from './chips/filter-chip/filter-chip.component';
import { InputChipComponent } from './chips/input-chip/input-chip.component';
import { SuggestionChipComponent } from './chips/suggestion-chip/suggestion-chip.component';
import '@material/web/chips/chip-set';
import '@material/web/chips/assist-chip';
import '@material/web/chips/filter-chip';
import '@material/web/chips/input-chip';
import '@material/web/chips/suggestion-chip';

import { DialogComponent } from './dialog/dialog.component';
import '@material/web/dialog/dialog';

import { DividerComponent } from './divider/divider.component';
import '@material/web/divider/divider';

import { ElevationComponent } from './elevation/elevation.component';
import '@material/web/elevation/elevation';
import { ChipSetComponent } from './chips/chip-set/chip-set.component';



@NgModule({
  declarations: [
    TextButtonComponent,
    ElevatedButtonComponent,
    FilledButtonComponent,
    FilledTonalButtonComponent,
    OutlinedButtonComponent,
    CheckboxComponent,
    ChipSetComponent,
    AssistChipComponent,
    FilterChipComponent,
    InputChipComponent,
    SuggestionChipComponent,
    DialogComponent,
    DividerComponent,
    ElevationComponent
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
    CheckboxComponent,
    ChipSetComponent,
    AssistChipComponent,
    FilterChipComponent,
    InputChipComponent,
    SuggestionChipComponent,
    // DialogComponent,
    DividerComponent,
    ElevationComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WebControlsModule { }
