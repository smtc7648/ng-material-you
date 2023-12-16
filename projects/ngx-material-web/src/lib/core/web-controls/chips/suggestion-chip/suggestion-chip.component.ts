import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-suggestion-chip',
  templateUrl: './suggestion-chip.component.html',
  styleUrls: ['./suggestion-chip.component.scss']
})
export class SuggestionChipComponent {
  @Input({ required: true }) label!: string;
  @Input('aria-label') ariaLabel!: string;
  @Input({ transform: booleanAttribute }) elevated!: boolean;
  @Input() href!: string;
  @Input() target!: string;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute, alias: 'always-focusable' }) alwaysFocusable!: boolean;
}
