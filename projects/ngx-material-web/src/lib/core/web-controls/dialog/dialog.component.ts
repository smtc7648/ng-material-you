import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-md-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() type: string | undefined;
  @Input('is-open') open: boolean | undefined;

  @Output('on-open') onOpen!: EventEmitter<void>;
  @Output('on-closed') onCLosed!: EventEmitter<void>;
  @Output('opend') opened!: EventEmitter<void>;
  @Output('close') close!: EventEmitter<void>;
  @Output('cancel') cancel!: EventEmitter<void>;

  private returnValue: string = '';
  public set setReturnValue(v : string) {
    this.returnValue = v;
  }
  public get getReturnValue() : string {
    return this.returnValue;
  }

  // public show: Promise<void> = () => {
  // }

  // public close: Promise<void> = () => {
  // }
}
