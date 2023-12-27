import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-linear-progress',
  templateUrl: './linear-progress.component.html',
  styleUrls: ['./linear-progress.component.scss']
})
export class LinearProgressComponent {
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input({ transform: numberAttribute }) buffer!: number;
  @Input({ transform: numberAttribute }) value!: number;
  @Input({ transform: numberAttribute }) max!: number;
  @Input({ transform: booleanAttribute }) indeterminate!: boolean;
  @Input({ transform: booleanAttribute, alias: 'four-color' }) fourColor!: boolean;
}
