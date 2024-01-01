import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input() type!: string;
  @Input() href!: string;
  @Input() target!: string;
  @Input({ transform: booleanAttribute, alias: 'keep-open' }) keepOpen!: boolean;
  @Input({ transform: booleanAttribute }) selected!: boolean;

  @Output('close-menu') closeMenu: EventEmitter<void> = new EventEmitter();
  // typeheadText!: string;

  onCloseMenu(e: Event): void {
    this.closeMenu.emit();
  }
}
