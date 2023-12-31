import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-primary-tab',
  templateUrl: './primary-tab.component.html',
  styleUrls: ['./primary-tab.component.scss']
})
export class PrimaryTabComponent {
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input({ alias: 'aria-controls' }) ariaControls!: string;
  @Input({ alias: 'inline-icon', transform: booleanAttribute }) inlineIcon!: boolean;
  @Input({ alias: 'is-tab', transform: booleanAttribute }) isTab!: boolean;
  @Input({ transform: booleanAttribute }) active!: boolean;
  @Input({ alias: 'has-icon', transform: booleanAttribute }) hasIcon!: boolean;
  @Input({ alias: 'icon-only', transform: booleanAttribute }) iconOnly!: boolean;
  @Input({ transform: booleanAttribute }) selected!: boolean;
}
