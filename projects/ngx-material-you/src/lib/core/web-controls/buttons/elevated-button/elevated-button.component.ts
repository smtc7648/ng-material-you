import { Component, Input } from '@angular/core';

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
  @Input('trailing-icon') trailingIcon: boolean = false;
  @Input('has-icon') hasIcon: boolean = false;
  @Input() type: string = 'submit';
  @Input() value: string = '';
  @Input() label: string = 'Elevated Button';

  // name?: string = undefined;
  // form?: HTMLFormElement = undefined;
}
