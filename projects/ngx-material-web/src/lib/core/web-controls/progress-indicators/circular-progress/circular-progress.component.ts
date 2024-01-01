import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent {
  @Input({ transform: numberAttribute }) value!: number;
  @Input({ transform: numberAttribute }) max!: number;
  @Input({ transform: booleanAttribute }) indeterminate!: boolean;
  @Input({ transform: booleanAttribute, alias: 'four-color' }) fourColor!: boolean;
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
}
