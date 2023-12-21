import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent {
  @Input('aria-label') ariaLabel!: string;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input() href!: string;
  @Input() target!: string;
  @Input({ alias: 'trailing-icon', transform: booleanAttribute }) trailingIcon!: boolean;
  @Input({ alias: 'has-icon', transform: booleanAttribute }) hasIcon!: boolean;
  @Input() type!: string;
  @Input() value!: string;
  // name?: string = undefined;
  // form?: HTMLFormElement = undefined;
}
