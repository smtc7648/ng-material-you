import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-assist-chip',
  templateUrl: './assist-chip.component.html',
  styleUrls: ['./assist-chip.component.scss']
})
export class AssistChipComponent {
  @Input({ required: true }) label!: string;
}
