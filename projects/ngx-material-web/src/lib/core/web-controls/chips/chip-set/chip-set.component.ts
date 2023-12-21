import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-chip-set',
  templateUrl: './chip-set.component.html',
  styleUrls: ['./chip-set.component.scss']
})
export class ChipSetComponent {
  @Input('aria-labelledby') ariaLabelledBy!: string;
  @Input('aria-label') ariaLabel!: string;
}
