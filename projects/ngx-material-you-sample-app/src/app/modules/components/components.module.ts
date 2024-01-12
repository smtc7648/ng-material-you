import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
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


@NgModule({
  declarations: [
    ButtonsComponent,
    CheckboxComponent,
    ChipsComponent,
    FabComponent,
    IconButtonComponent,
    ListsComponent,
    MenusComponent,
    ProgressIndicatorsComponent,
    RadioComponent,
    RippleComponent,
    SelectComponent,
    SlidersComponent,
    SwitchComponent,
    TabsComponent,
    TextFieldComponent,
    DialogsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
