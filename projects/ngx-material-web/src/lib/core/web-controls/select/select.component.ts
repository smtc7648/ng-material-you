// import { ViewChild, ElementRef, Input, booleanAttribute, numberAttribute, Output, EventEmitter } from "@angular/core";
// import { FilledSelect } from "@material/web/select/internal/filled-select";
// import { OutlinedSelect } from "@material/web/select/internal/outlined-select";

// export class SelectComponent<T extends FilledSelect | OutlinedSelect> {
//   @ViewChild('ngxMdOutlinedSelect') ngxMdSelect!: ElementRef<T>;

//   @Input({ transform: booleanAttribute }) quick!: boolean;
//   @Input({ transform: booleanAttribute }) required!: boolean;
//   @Input({ transform: booleanAttribute }) disabled!: boolean;
//   @Input({ alias: 'error-text' }) errorText!: string;
//   @Input() label!: string;
//   @Input({ alias: 'supporting-text' }) supportingText!: string;
//   @Input({ transform: booleanAttribute }) error!: boolean;
//   @Input({ alias: 'menu-positioning' }) menuPositioning!: string;
//   @Input({ alias: 'typeahead-delay', transform: numberAttribute }) typeaheadDelay!: number;
//   @Input({ alias: 'has-leading-icon', transform: booleanAttribute }) hasLeadingIcon!: boolean;
//   @Input({ alias: 'display-text' }) displayText!: string;
//   @Input() value!: string;
//   @Input({ alias: 'selected-index' }) selectedIndex!: number;

//   // options!: SelectOption[];
//   // selectedOptions!: SelectOption[];
//   // name!: string;
//   // form!: HTMLFormElement;
//   // labels!: NodeList;
//   // validity!: ValidityState;
//   // validationMessage!: string;
//   // willValidate!: boolean;

//   @Output() input: EventEmitter<void> = new EventEmitter();
//   @Output() change: EventEmitter<void> = new EventEmitter();
//   @Output() opening: EventEmitter<void> = new EventEmitter();
//   @Output() opened: EventEmitter<void> = new EventEmitter();
//   @Output() closing: EventEmitter<void> = new EventEmitter();
//   @Output() closed: EventEmitter<void> = new EventEmitter();

//   onInput(e: Event): void {
//     this.input.emit();
//   }

//   onChange(e: Event): void {
//     this.change.emit();
//   }

//   onOpening(e: Event): void {
//     this.opening.emit();
//   }

//   onOpened(e: Event): void {
//     this.opened.emit();
//   }

//   onClosing(e: Event): void {
//     this.closing.emit();
//   }

//   onClosed(e: Event): void {
//     this.closed.emit();
//   }

//   public select = (value: string): void => {
//     this.ngxMdSelect.nativeElement.select(value);
//   }

//   public selectIndex = (index: number): void => {
//     this.ngxMdSelect.nativeElement.selectIndex(index);
//   }

//   public reset = (): void => {
//     this.ngxMdSelect.nativeElement.reset();
//   }

//   public checkValidity = (): boolean => {
//     return this.ngxMdSelect.nativeElement.checkValidity();
//   }

//   public reportValidity = (): boolean => {
//     return this.ngxMdSelect.nativeElement.reportValidity();
//   }

//   public setCustomValidity = (error: string): void => {
//     this.ngxMdSelect.nativeElement.setCustomValidity(error);
//   }

//   public getUpdateComplete = (): Promise<boolean> => {
//     return this.ngxMdSelect.nativeElement.getUpdateComplete();
//   }
// }
