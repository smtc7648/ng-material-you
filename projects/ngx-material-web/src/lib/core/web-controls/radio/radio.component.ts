import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute }) checked!: boolean;
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input() value!: string;
  @Input() name!: string;
  @Input({ required: true }) id!: string;

  @Output() input: EventEmitter<void> = new EventEmitter();
  @Output() change: EventEmitter<void> = new EventEmitter();

  form!: HTMLFormElement;
  labels!: NodeList;

  onInput(e: Event): void {
    this.input.emit();
  }

  onChange(e: Event): void {
    this.change.emit();
  }
}
