import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { MaterialThemingComponent } from './components/material-theming/material-theming.component';
import { TypogrphyComponent } from './components/typogrphy/typogrphy.component';

const routes: Routes = [
  { path: '', redirectTo: 'material-theming', pathMatch: 'full' },
  { path: 'color', component: ColorComponent },
  { path: 'material-theming', component: MaterialThemingComponent },
  { path: 'typography', component: TypogrphyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemingRoutingModule { }
