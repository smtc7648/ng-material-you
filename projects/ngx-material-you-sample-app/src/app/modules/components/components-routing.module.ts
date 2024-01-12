import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FabComponent } from './components/fab/fab.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ListsComponent } from './components/lists/lists.component';
import { MenusComponent } from './components/menus/menus.component';
import { ProgressIndicatorsComponent } from './components/progress-indicators/progress-indicators.component';
import { RadioComponent } from './components/radio/radio.component';
import { RippleComponent } from './components/ripple/ripple.component';
import { SelectComponent } from './components/select/select.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'dialogs', component: DialogsComponent },
  { path: 'fab', component: FabComponent },
  { path: 'icon-button', component: IconButtonComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'progress-indicators', component: ProgressIndicatorsComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'ripple', component: RippleComponent },
  { path: 'select', component: SelectComponent },
  { path: 'sliders', component: SlidersComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'text-field', component: TextFieldComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
