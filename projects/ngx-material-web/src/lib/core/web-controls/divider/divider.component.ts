import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  @Input() inset: boolean | undefined;
  @Input('inset-start') insetStart: boolean | undefined;
  @Input('inset-end') insetEnd: boolean | undefined;
}
