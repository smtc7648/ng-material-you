import { Component, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { MdSubMenu } from '@material/web/menu/sub-menu';

@Component({
  selector: 'ngx-md-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent {
  @ViewChild('NgxMdSubMenu') mdSubMenu!: MdSubMenu;

  @Input({ alias: 'anchor-corner' }) anchorCorner!: string;
  @Input({ alias: 'menu-corner' }) menuCorner!: string;
  @Input({ transform: numberAttribute, alias: 'hover-open-delay' }) hoverOpenDelay!: number;
  @Input({ transform: numberAttribute, alias: 'hover-close-delay' }) hoverCloseDelay!: number;
  @Input({ transform: booleanAttribute, alias: 'md-sub-menu' }) isSubMenu!: boolean;
  //TODO: check the isSubMenu

  // item!: MenuItem;
  // menu!: Menu;

  @Output() deactivateItems: EventEmitter<void> = new EventEmitter();
  @Output() requestActivation: EventEmitter<void> = new EventEmitter();
  @Output() deactivateTypehead: EventEmitter<void> = new EventEmitter();
  @Output() activateTypehead: EventEmitter<void> = new EventEmitter();

  onDeactivateItems(e: Event): void {
    this.deactivateItems.emit();
  }

  onRequestActivation(e: Event): void {
    this.requestActivation.emit();
  }

  onDeactivateTypehead(e: Event): void {
    this.deactivateTypehead.emit();
  }

  onActivateTypehead(e: Event): void {
    this.activateTypehead.emit();
  }

  public show(): Promise<void> {
    return this.mdSubMenu.show();
  }

  public close(): Promise<void> {
    return this.mdSubMenu.close();
  }
}
