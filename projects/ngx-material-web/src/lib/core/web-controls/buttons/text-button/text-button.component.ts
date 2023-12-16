import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent {
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
