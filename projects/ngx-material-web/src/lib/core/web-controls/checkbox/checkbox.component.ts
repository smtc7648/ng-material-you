import { Component, INJECTOR, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input() checked!: boolean;
  @Input() disabled!: boolean;
  @Input() indeterminate!: boolean;
  @Input() required!: boolean;
  @Input() value: string = 'on';
  @Input() label: string = '';
  @Input() for: string = '';

  name: string | undefined;
  form: HTMLFormElement | undefined;
  labels: NodeList | undefined;
  validity: ValidityState | undefined;
  validationMessage: string | undefined;
  willValidate: boolean | undefined;
}
