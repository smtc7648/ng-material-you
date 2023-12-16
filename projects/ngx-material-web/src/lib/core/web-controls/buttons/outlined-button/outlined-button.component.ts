import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-outlined-button',
  templateUrl: './outlined-button.component.html',
  styleUrls: ['./outlined-button.component.scss']
})
export class OutlinedButtonComponent {
  @Input('aria-label') ariaLabel?: string;
  @Input() disabled: boolean = false;
  @Input() href: string = '';
  @Input() target: string = '';
  @Input('trailing-icon') trailingIcon!: boolean;
  @Input('has-icon') hasIcon!: boolean;
  @Input() type: string = 'submit';
  @Input() value: string = '';

  // name?: string = undefined;
  // form?: HTMLFormElement = undefined;
}
