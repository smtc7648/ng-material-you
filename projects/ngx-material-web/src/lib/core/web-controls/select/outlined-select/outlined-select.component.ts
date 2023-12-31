import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { MdOutlinedSelect } from '@material/web/select/outlined-select';

@Component({
  selector: 'ngx-md-outlined-select',
  templateUrl: './outlined-select.component.html',
  styleUrls: ['./outlined-select.component.scss']
})
export class OutlinedSelectComponent {
  @ViewChild('ngxMdOutlinedSelect') ngxMdOutlinedSelect!: ElementRef<MdOutlinedSelect>;
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
    console.log(`Triggering Event: onInput($event)`);
    console.log(e);
    this.input.emit();
    console.log(`Event Triggered: onInput($event)`);
  }

  onChange(e: Event): void {
    console.log(`Triggering Event: onChange($event)`);
    console.log(e);
    this.change.emit();
    console.log(`Event Triggered: onChange($event)`);
  }

  onOpening(e: Event): void {
    console.log(`Triggering Event: onOpening($event)`);
    console.log(e);
    this.opening.emit();
    console.log(`Event Triggered: onOpening($event)`);
  }

  onOpened(e: Event): void {
    console.log(`Triggering Event: onOpened($event)`);
    console.log(e);
    this.opened.emit();
    console.log(`Event Triggered: onOpened($event)`);
  }

  onClosing(e: Event): void {
    console.log(`Triggering Event: onClosing($event)`);
    console.log(e);
    this.closing.emit();
    console.log(`Event Triggered: onClosing($event)`);
  }

  onClosed(e: Event): void {
    console.log(`Triggering Event: onClosed($event)`);
    console.log(e);
    this.closed.emit();
    console.log(`Event Triggered: onClosed($event)`);
  }

  public select = (value: string): void => {
    this.ngxMdOutlinedSelect.nativeElement.select(value);
  }

  public selectIndex = (index: number): void => {
    this.ngxMdOutlinedSelect.nativeElement.selectIndex(index);
  }

  public reset = (): void => {
    this.ngxMdOutlinedSelect.nativeElement.reset();
  }

  public checkValidity = (): boolean => {
    return this.ngxMdOutlinedSelect.nativeElement.checkValidity();
  }

  public reportValidity = (): boolean => {
    return this.ngxMdOutlinedSelect.nativeElement.reportValidity();
  }

  public setCustomValidity = (error: string): void => {
    this.ngxMdOutlinedSelect.nativeElement.setCustomValidity(error);
  }

  public getUpdateComplete = (): Promise<boolean> => {
    return this.ngxMdOutlinedSelect.nativeElement.getUpdateComplete();
  }
}
