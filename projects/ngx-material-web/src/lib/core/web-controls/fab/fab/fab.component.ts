import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent {
  @Input('aria-label') ariaLabel!: string;
  @Input() size!: string;
  @Input() variant!: string;
  @Input({ transform: booleanAttribute }) lowered!: boolean;
  @Input() label!: string;
  @Input('touch-target') touchTarget!: string;
}
