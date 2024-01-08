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

import { ChipSetComponent } from './chips/chip-set/chip-set.component';
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

import { FabComponent } from './fab/fab/fab.component';
import { BrandedFabComponent } from './fab/branded-fab/branded-fab.component';
import '@material/web/fab/fab';
import '@material/web/fab/branded-fab';

import { IconComponent } from './icon/icon/icon.component';
import { IconButtonComponent } from './icon/icon-button/icon-button.component';
import { FilledIconButtonComponent } from './icon/filled-icon-button/filled-icon-button.component';
import { FilledTonalIconButtonComponent } from './icon/filled-tonal-icon-button/filled-tonal-icon-button.component';
import { OutlinedIconButtonComponent } from './icon/outlined-icon-button/outlined-icon-button.component';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/iconbutton/filled-icon-button';
import '@material/web/iconbutton/filled-tonal-icon-button';
import '@material/web/iconbutton/outlined-icon-button';

import { ListComponent } from './list/list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import '@material/web/list/list';
import '@material/web/list/list-item';

import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuComponent } from './menu/menu/menu.component';
import { SubMenuComponent } from './menu/sub-menu/sub-menu.component';
import '@material/web/menu/menu-item';
import '@material/web/menu/menu';
import '@material/web/menu/sub-menu';

import { LinearProgressComponent } from './progress-indicators/linear-progress/linear-progress.component';
import { CircularProgressComponent } from './progress-indicators/circular-progress/circular-progress.component';
import '@material/web/progress/linear-progress';
import '@material/web/progress/circular-progress';

import { RadioComponent } from './radio/radio.component';
import '@material/web/radio/radio';

import { RippleComponent } from './ripple/ripple.component';
import '@material/web/ripple/ripple';

import { FilledSelectComponent } from './select/filled-select/filled-select.component';
import { OutlinedSelectComponent } from './select/outlined-select/outlined-select.component';
import { SelectOptionComponent } from './select/select-option/select-option.component';
import '@material/web/select/filled-select';
import '@material/web/select/outlined-select';
import '@material/web/select/select-option';

import { SwitchComponent } from './switch/switch.component';
import '@material/web/switch/switch';

import { TabsComponent } from './tabs/tabs/tabs.component';
import { PrimaryTabComponent } from './tabs/primary-tab/primary-tab.component';
import { SecondaryTabComponent } from './tabs/secondary-tab/secondary-tab.component';
import '@material/web/tabs/tabs';
import '@material/web/tabs/primary-tab';
import '@material/web/tabs/secondary-tab';

import { FilledTextFieldComponent } from './text-filleds/filled-text-field/filled-text-field.component';
import { OutlinedTextFieldComponent } from './text-filleds/outlined-text-field/outlined-text-field.component';
import '@material/web/textfield/filled-text-field';
import '@material/web/textfield/outlined-text-field';

import { SliderComponent } from './slider/slider.component';
import '@material/web/slider/slider';

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
    ElevationComponent,
    FabComponent,
    BrandedFabComponent,
    IconComponent,
    IconButtonComponent,
    FilledIconButtonComponent,
    FilledTonalIconButtonComponent,
    OutlinedIconButtonComponent,
    ListComponent,
    ListItemComponent,
    MenuItemComponent,
    MenuComponent,
    SubMenuComponent,
    LinearProgressComponent,
    CircularProgressComponent,
    RadioComponent,
    FilledSelectComponent,
    OutlinedSelectComponent,
    SelectOptionComponent,
    RippleComponent,
    SwitchComponent,
    TabsComponent,
    PrimaryTabComponent,
    SecondaryTabComponent,
    FilledTextFieldComponent,
    OutlinedTextFieldComponent,
    SliderComponent
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
    DialogComponent,
    DividerComponent,
    ElevationComponent,
    FabComponent,
    BrandedFabComponent,
    IconComponent,
    IconButtonComponent,
    FilledIconButtonComponent,
    FilledTonalIconButtonComponent,
    OutlinedIconButtonComponent,
    ListComponent,
    ListItemComponent,
    MenuItemComponent,
    MenuComponent,
    SubMenuComponent,
    LinearProgressComponent,
    CircularProgressComponent,
    RadioComponent,
    RippleComponent,
    FilledSelectComponent,
    OutlinedSelectComponent,
    SelectOptionComponent,
    SliderComponent,
    SwitchComponent,
    PrimaryTabComponent,
    SecondaryTabComponent,
    TabsComponent,
    FilledTextFieldComponent,
    OutlinedTextFieldComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WebControlsModule { }
