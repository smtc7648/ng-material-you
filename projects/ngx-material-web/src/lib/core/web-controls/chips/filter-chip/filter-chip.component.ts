import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-filter-chip',
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss']
})
export class FilterChipComponent {
  @Input({ required: true }) label!: string;
}
