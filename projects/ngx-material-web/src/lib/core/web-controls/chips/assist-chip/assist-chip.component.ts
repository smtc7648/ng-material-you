import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-assist-chip',
  templateUrl: './assist-chip.component.html',
  styleUrls: ['./assist-chip.component.scss']
})
export class AssistChipComponent {
  @Input({ required: true }) label!: string;
  @Input('aria-label') ariaLabel!: string;
  @Input({ transform: booleanAttribute }) elevated!: boolean;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute, alias: 'always-focusable' }) alwaysFocusable!: boolean;
  @Input() href!: string;
  @Input() target!: string;
}
