import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';

@Component({
  selector: 'ngx-md-filled-text-field',
  templateUrl: './filled-text-field.component.html',
  styleUrls: ['./filled-text-field.component.scss']
})
export class FilledTextFieldComponent {
  @ViewChild('ngxFilledTextField') ngxFilledTextField!: ElementRef<MdFilledTextField>;
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute }) error!: boolean;
  @Input({ alias: 'error-text' }) errorText!: string;
  @Input() label!: string;
  @Input({ transform: booleanAttribute }) required!: boolean;
  @Input() value!: string;
  @Input({ alias: 'prefix-text' }) prefixText!: string;
  @Input({ alias: 'suffix-text' }) suffixText!: string;
  @Input({ transform: booleanAttribute, alias: 'has-leading-icon' }) hasLeadingIcon!: boolean;
  @Input({ transform: booleanAttribute, alias: 'has-trailing-icon' }) hasTrailingIcon!: boolean;
  @Input({ alias: 'supporting-text' }) supportingText!: string;
  @Input({ alias: 'text-direction' }) textDirection!: string;
  @Input({ transform: numberAttribute }) rows!: number;
  @Input({ transform: numberAttribute }) cols!: number;
  @Input({ alias: 'inputmode' }) inputMode!: string;
  @Input() max!: string;
  @Input({ transform: numberAttribute, alias: 'max-length' }) maxLength!: number;
  @Input() min!: string;
  @Input({ transform: numberAttribute, alias: 'min-length' }) minLength!: number;
  @Input() pattern!: string;
  @Input() placeholder!: string;
  @Input({ transform: booleanAttribute }) readonly!: boolean;
  @Input({ transform: booleanAttribute }) multiple!: boolean;
  @Input() step!: string;
  @Input() type!: string;
  @Input() autocomplete!: string;

  // form!: HTMLFormElement;
  // labels!: NodeList;
  // name!: string;
  // selectionDirection!: string;
  // selectionEnd!: number;
  // selectionStart!: number;
  // validationMessage!: string;
  // validity!: ValidityState;
  // valueAsNumber!: number;
  // valueAsDate!: Date;
  // willValidate!: boolean;

  checkValidity(): boolean {
    return this.ngxFilledTextField.nativeElement.checkValidity();
  }

  reportValidity(): boolean {
    return this.ngxFilledTextField.nativeElement.reportValidity();
  }

  select(): void {
    this.ngxFilledTextField.nativeElement.select();
  }

  setCustomValidity(error: string): void {
    this.ngxFilledTextField.nativeElement.setCustomValidity(error);
  }

  setRangeText(args: string): void {
    this.ngxFilledTextField.nativeElement.setRangeText(args);
  }

  setRangeTextWithStartEndAndSelectionMode(args: string, start: number, end: number, selectionMode?: SelectionMode | undefined): void {
    this.ngxFilledTextField.nativeElement.setRangeText(args, start, end, selectionMode);
  }

  setSelectionRange(start: number | null, end: number | null, direction: 'forward' | 'backward' | 'none' | undefined): void {
    this.ngxFilledTextField.nativeElement.setSelectionRange(start, end, direction);
  }

  stepDown(stepDecrement: number | undefined): void {
    this.ngxFilledTextField.nativeElement.stepDown(stepDecrement);
  }

  stepUp(stepIncrement: number | undefined): void {
    this.ngxFilledTextField.nativeElement.stepUp(stepIncrement);
  }

  reset(): void {
    this.ngxFilledTextField.nativeElement.reset();
  }
}
