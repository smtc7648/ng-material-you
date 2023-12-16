import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-suggestion-chip',
  templateUrl: './suggestion-chip.component.html',
  styleUrls: ['./suggestion-chip.component.scss']
})
export class SuggestionChipComponent {
  @Input({ required: true }) label!: string;
}
