import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent {
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute }) selected!: boolean;
  @Input() value!: string;

  // type!: string;
  // typeaheadText!: string;
  // displayText!: string;

  @Output('close-menu') closeMenu: EventEmitter<void> = new EventEmitter();
  @Output('request-selection') requestSelection: EventEmitter<void> = new EventEmitter();
  @Output('request-deselection') requestDeselection: EventEmitter<void> = new EventEmitter();
}
