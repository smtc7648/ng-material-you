import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-filter-chip',
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss']
})
export class FilterChipComponent {
  @Input({ required: true }) label!: string;
  @Input('aria-label') ariaLabel!: string;
  @Input({ transform: booleanAttribute }) elevated!: boolean;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute }) removable!: boolean;
  @Input({ transform: booleanAttribute }) selected!: boolean;
  @Input({ transform: booleanAttribute, alias: 'always-focusable' }) alwaysFocusable!: boolean;

  // handleTrailingActionFocus!: () => void;
  // ariaLabelRemove!: string;
}
