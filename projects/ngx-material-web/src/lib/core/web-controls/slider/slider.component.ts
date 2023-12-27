import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: numberAttribute }) min!: number;
  @Input({ transform: numberAttribute }) max!: number;
  @Input({ transform: numberAttribute }) value!: number;
  @Input({ transform: numberAttribute }) valueStart!: number;
  @Input({ transform: numberAttribute }) valueEnd!: number;
  @Input({ alias: 'value-label' }) valueLabel!: string;
  @Input({ alias: 'value-label-start' }) valueLabelStart!: string;
  @Input({ alias: 'value-label-end' }) valueLabelEnd!: string;
  @Input({ alias: 'aria-label-start' }) ariaLabelStart!: string;
  @Input({ alias: 'aria-valuetext-start' }) ariaValueTextStart!: string;
  @Input({ alias: 'aria-label-end' }) ariaLabelEnd!: string;
  @Input({ alias: 'aria-valuetext-end' }) ariaValueTextEnd!: string;
  @Input({ transform: numberAttribute }) step!: number;
  @Input({ transform: booleanAttribute }) ticks!: boolean;
  @Input({ transform: booleanAttribute }) labeled!: boolean;
  @Input({ transform: booleanAttribute }) range!: boolean;

  // name!: string;
  // nameStart!: string;
  // nameEnd!: string;
  // form!: HTMLFormElement;
  // labels!: NodeList;
}
