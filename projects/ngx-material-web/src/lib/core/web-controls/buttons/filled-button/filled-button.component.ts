import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-filled-button',
  templateUrl: './filled-button.component.html',
  styleUrls: ['./filled-button.component.scss']
})
export class FilledButtonComponent {
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
