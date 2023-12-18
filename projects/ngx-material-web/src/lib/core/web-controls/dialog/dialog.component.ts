import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { MdDialog } from '@material/web/dialog/dialog';
import { DialogAnimation } from '@material/web/dialog/internal/animations';

@Component({
  selector: 'ngx-md-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @ViewChild('ngxMdDialog') dialog!: ElementRef<MdDialog>;

  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input() type!: string;
  @Input({ alias: 'open', required: true, transform: booleanAttribute }) isOpen!: boolean;

  @Output() open: EventEmitter<void> = new EventEmitter();
  @Output() opened: EventEmitter<void> = new EventEmitter();
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  triggerOpen(): void {
    this.open.emit();
  }

  triggerOpened(): void {
    this.opened.emit();
  }

  triggerClose(): void {
    this.close.emit();
  }

  triggerClosed(): void {
    this.closed.emit();
  }

  triggerCancel(): void {
    this.cancel.emit();
  }

  public show(): void {
    this.dialog.nativeElement.show();
  }

  public closeDialog(action: string): void {
    console.log(`Dialog Action: ${action}`);
    this.dialog.nativeElement.close();
  }

  public get getOpenAnimation() : () => DialogAnimation {
    return this.dialog.nativeElement.getOpenAnimation;
  }


  public get getCloseAnimation() : () => DialogAnimation {
    return this.dialog.nativeElement.getCloseAnimation;
  }
}
