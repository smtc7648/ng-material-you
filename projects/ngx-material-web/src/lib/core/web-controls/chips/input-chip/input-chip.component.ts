import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-input-chip',
  templateUrl: './input-chip.component.html',
  styleUrls: ['./input-chip.component.scss']
})
export class InputChipComponent {
  @Input({ required: true }) label!: string;
  @Input('aria-label') ariaLabel!: string;
  @Input({ transform: booleanAttribute }) avatar!: boolean;
  @Input() href!: string;
  @Input() target!: string;
  @Input({ transform: booleanAttribute, alias: 'remove-only' }) removeOnly!: boolean;
  @Input({ transform: booleanAttribute }) selected!: boolean;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute, alias: 'always-focusable' }) alwaysFocusable!: boolean;

  // handleTrailingActionFocus!: () => void;
  // ariaLabelRemove!: string;
}
