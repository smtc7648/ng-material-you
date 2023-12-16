import { Component, Input, OnInit, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-elevated-button',
  templateUrl: './elevated-button.component.html',
  styleUrls: ['./elevated-button.component.scss']
})
export class ElevatedButtonComponent {
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
