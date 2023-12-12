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
  @Input('trailing-icon') trailingIcon: boolean = false;
  @Input('has-icon') hasIcon: boolean = false;
  @Input() type: string = 'submit';
  @Input() value: string = '';
  @Input() label: string = 'Outlined Button';

  // name?: string = undefined;
  // form?: HTMLFormElement = undefined;
}
