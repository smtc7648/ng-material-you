import { Component, INJECTOR, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() required: boolean = false;
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
