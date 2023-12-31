import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { MdMenu } from '@material/web/menu/menu';
import { MenuItem } from '@material/web/menu/menu-item';

@Component({
  selector: 'ngx-md-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChild('ngxMdMenu') mdMenu!: ElementRef<MdMenu>;

  @Input() anchor!: string;
  @Input() positioning!: string;
  @Input({ transform: booleanAttribute }) quick!: boolean;
  @Input({ transform: booleanAttribute, alias: 'has-overflow' }) hasOverflow!: boolean;
  @Input({ transform: booleanAttribute }) open!: boolean;
  @Input({ transform: numberAttribute, alias: 'x-offset' }) xOffset!: number;
  @Input({ transform: numberAttribute, alias: 'y-offset' }) yOffset!: number;
  @Input({ transform: numberAttribute, alias: 'typehead-delay' }) typeheadDelay!: number;
  @Input({ alias: 'anchor-corner' }) anchorCorner!: string;
  @Input({ alias: 'menu-corner' }) menuCorner!: string;
  @Input({ transform: booleanAttribute, alias: 'stay-open-on-outside-click' }) stayOpenOnOutsideClick!: boolean;
  @Input({ transform: booleanAttribute, alias: 'stay-open-on-focusout' }) stayOpenOnFocusout!: boolean;
  @Input({ transform: booleanAttribute, alias: 'skip-restore-focus' }) skipRestoreFocus!: boolean;
  @Input({ alias: 'default-focus' }) defaultFocus!: string;

  // isSubmenu!: boolean;
  // typeaheadController!: TypeaheadController;
  // anchorElement!: HTMLElement & Partial<SurfacePositionTarget>;
  // items!: MenuItem[];

  @Output() opening: EventEmitter<void> = new EventEmitter();
  @Output() opened: EventEmitter<void> = new EventEmitter();
  @Output() closing: EventEmitter<void> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();

  onOpening(e: Event): void {
    this.opening.emit();
  }

  onOpened(e: Event): void {
    this.opened.emit();
  }

  onClosing(e: Event): void {
    this.closing.emit();
  }

  onClosed(e: Event): void {
    this.closed.emit();
  }

  public close(): void {
    // this.mdMenu.nativeElement.close();
    this.mdMenu.nativeElement.open = false;
  }

  public show(): void {
    // this.mdMenu.nativeElement.show();
    this.mdMenu.nativeElement.open = true;
  }

  public activateNextItem(): MenuItem {
    return this.mdMenu.nativeElement.activateNextItem();
  }

  public activatePreviousItem(): MenuItem {
    return this.mdMenu.nativeElement.activatePreviousItem();
  }
}
