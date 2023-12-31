import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { MdFilledSelect } from '@material/web/select/filled-select';

@Component({
  selector: 'ngx-md-filled-select',
  templateUrl: './filled-select.component.html',
  styleUrls: ['./filled-select.component.scss']
})
export class FilledSelectComponent {
  @ViewChild('ngxMdFilledSelect') ngxMdFilledSelect!: ElementRef<MdFilledSelect>;
  @Input({ transform: booleanAttribute }) quick!: boolean;
  @Input({ transform: booleanAttribute }) required!: boolean;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ alias: 'error-text' }) errorText!: string;
  @Input() label!: string;
  @Input({ alias: 'supporting-text' }) supportingText!: string;
  @Input({ transform: booleanAttribute }) error!: boolean;
  @Input({ alias: 'menu-positioning' }) menuPositioning!: string;
  @Input({ alias: 'typeahead-delay', transform: numberAttribute }) typeaheadDelay!: number;
  @Input({ alias: 'has-leading-icon', transform: booleanAttribute }) hasLeadingIcon!: boolean;
  @Input({ alias: 'display-text' }) displayText!: string;
  @Input() value!: string;
  @Input({ alias: 'selected-index', transform: numberAttribute }) selectedIndex!: number;

  // options!: SelectOption[];
  // selectedOptions!: SelectOption[];
  // name!: string;
  // form!: HTMLFormElement;
  // labels!: NodeList;
  // validity!: ValidityState;
  // validationMessage!: string;
  // willValidate!: boolean;

  @Output() input: EventEmitter<void> = new EventEmitter();
  @Output() change: EventEmitter<void> = new EventEmitter();
  @Output() opening: EventEmitter<void> = new EventEmitter();
  @Output() opened: EventEmitter<void> = new EventEmitter();
  @Output() closing: EventEmitter<void> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();

  onInput(e: Event): void {
    this.input.emit();
  }

  onChange(e: Event): void {
    this.change.emit();
  }

  onOpening(e: Event): void {
    this.opening.emit();
  }

  onOpened(e: Event): void {
    this.opened.emit();
  }

  onClosing(e: Event): void {
    this.closing.emit();
  }

  onClosed(e: Event): void {
    this.closed.emit();
  }

  public select = (value: string): void => {
    this.ngxMdFilledSelect.nativeElement.select(value);
  }

  public selectIndex = (index: number): void => {
    this.ngxMdFilledSelect.nativeElement.selectIndex(index);
  }

  public reset = (): void => {
    this.ngxMdFilledSelect.nativeElement.reset();
  }

  public checkValidity = (): boolean => {
    return this.ngxMdFilledSelect.nativeElement.checkValidity();
  }

  public reportValidity = (): boolean => {
    return this.ngxMdFilledSelect.nativeElement.reportValidity();
  }

  public setCustomValidity = (error: string): void => {
    this.ngxMdFilledSelect.nativeElement.setCustomValidity(error);
  }

  public getUpdateComplete = (): Promise<boolean> => {
    return this.ngxMdFilledSelect.nativeElement.getUpdateComplete();
  }
}
