import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-filled-button',
  templateUrl: './filled-button.component.html',
  styleUrls: ['./filled-button.component.scss']
})
export class FilledButtonComponent {
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
