import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input({ transform: booleanAttribute }) interactive!: boolean;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input() type!: string;
  @Input() href!: string;
  @Input() target!: string;
  @Input() headline!: string;

  @Output() requestActivation: EventEmitter<void> = new EventEmitter();

  triggerRequestActivation(e: any): void {
    console.log(e);
  }
}
