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
  @Input('trailing-icon') trailingIcon: boolean = false;
  @Input('has-icon') hasIcon: boolean = false;
  @Input() type: string = 'submit';
  @Input() value: string = '';
  @Input() label: string = 'Filled Button';

  // name?: string = undefined;
  // form?: HTMLFormElement = undefined;
}
