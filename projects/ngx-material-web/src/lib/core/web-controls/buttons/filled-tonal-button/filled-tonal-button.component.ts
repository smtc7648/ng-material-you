import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-filled-tonal-button',
  templateUrl: './filled-tonal-button.component.html',
  styleUrls: ['./filled-tonal-button.component.scss']
})
export class FilledTonalButtonComponent {
  @Input('aria-label') ariaLabel?: string;
  @Input() disabled: boolean = false;
  @Input() href: string = '';
  @Input() target: string = '';
  @Input('trailing-icon') trailingIcon: boolean = false;
  @Input('has-icon') hasIcon: boolean = false;
  @Input() type: string = 'submit';
  @Input() value: string = '';
  @Input() label: string = 'Filled Tonal Button';

  // name?: string = undefined;
  // form?: HTMLFormElement = undefined;
}
