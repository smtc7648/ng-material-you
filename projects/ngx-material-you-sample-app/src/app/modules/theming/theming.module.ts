import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemingRoutingModule } from './theming-routing.module';
import { MaterialThemingComponent } from './components/material-theming/material-theming.component';
import { ColorComponent } from './components/color/color.component';
import { TypogrphyComponent } from './components/typogrphy/typogrphy.component';


@NgModule({
  declarations: [
    MaterialThemingComponent,
    ColorComponent,
    TypogrphyComponent
  ],
  imports: [
    CommonModule,
    ThemingRoutingModule
  ]
})
export class ThemingModule { }
