import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-input-chip',
  templateUrl: './input-chip.component.html',
  styleUrls: ['./input-chip.component.scss']
})
export class InputChipComponent {
  @Input({ required: true }) label!: string;
}
