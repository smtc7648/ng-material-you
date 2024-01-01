import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-secondary-tab',
  templateUrl: './secondary-tab.component.html',
  styleUrls: ['./secondary-tab.component.scss']
})
export class SecondaryTabComponent {
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input({ alias: 'aria-controls' }) ariaControls!: string;
  @Input({ alias: 'is-tab', transform: booleanAttribute }) isTab!: boolean;
  @Input({ transform: booleanAttribute }) active!: boolean;
  @Input({ alias: 'has-icon', transform: booleanAttribute }) hasIcon!: boolean;
  @Input({ alias: 'icon-only', transform: booleanAttribute }) iconOnly!: boolean;
  @Input({ transform: booleanAttribute }) selected!: boolean;
}
