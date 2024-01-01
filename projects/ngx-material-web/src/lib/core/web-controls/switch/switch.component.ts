import { Component, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { MdSwitch } from '@material/web/switch/switch';

@Component({
  selector: 'ngx-md-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @ViewChild('ngxMdSwitch') ngxMdSwitch!: MdSwitch;

  @Input() id!: string;
  @Input() for!: string;
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute }) selected!: boolean;
  @Input({ transform: booleanAttribute }) icons!: boolean;
  @Input({ alias: 'show-only-selected-icon', transform: booleanAttribute }) showOnlySelectedIcon!: boolean;
  @Input({ transform: booleanAttribute }) required!: boolean;
  @Input() value!: string;

  // name!: string;
  // form!: HTMLFormElement;
  // labels!: NodeList;
  // validity!: ValidityState;
  // validationMessage!: string;
  // willValidate!: boolean;

  @Output() input: EventEmitter<void> = new EventEmitter();
  @Output() change: EventEmitter<void> = new EventEmitter();

  onInput(e: Event): void {
    this.input.emit();
  }

  onChange(e: Event): void {
    this.change.emit();
  }

  public checkValidity = (): boolean => {
    return this.ngxMdSwitch.checkValidity();
  }

  public reportValidity = (): boolean => {
    return this.ngxMdSwitch.reportValidity();
  }

  public setCustomValidity = (error: string): void => {
    this.ngxMdSwitch.setCustomValidity(error);
  }
}
