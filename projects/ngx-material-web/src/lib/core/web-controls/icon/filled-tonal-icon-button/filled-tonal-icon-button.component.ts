import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-filled-tonal-icon-button',
  templateUrl: './filled-tonal-icon-button.component.html',
  styleUrls: ['./filled-tonal-icon-button.component.scss']
})
export class FilledTonalIconButtonComponent {
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ alias: 'flip-icon-in-rtl', transform: booleanAttribute }) flipIconInRtl!: boolean;
  @Input() href!: string;
  @Input() target!: string;
  @Input({ alias: 'aria-label-selected' }) ariaLabelSelected!: string;
  @Input({ transform: booleanAttribute }) toggle!: boolean;
  @Input({ transform: booleanAttribute }) selected!: boolean;
  @Input() type!: string;
  @Input() value!: string;

  // name!: string;
  // form!: HTMLFormElement;
  // labels!: NodeList;
}
