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
  @Input('trailing-icon') trailingIcon: boolean = false;
  @Input('has-icon') hasIcon: boolean = false;
  @Input() type: string = 'submit';
  @Input() value: string = '';
  @Input() label: string = 'Text Button';

  // name?: string = undefined;
  // form?: HTMLFormElement = undefined;
}
