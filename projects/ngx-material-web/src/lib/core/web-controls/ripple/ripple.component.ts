import { Component, ElementRef, Input, ViewChild, booleanAttribute } from '@angular/core';
import { MdRipple } from '@material/web/ripple/ripple';

@Component({
  selector: 'ngx-md-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class RippleComponent {
  @ViewChild('ngxMdRipple') ngxMdRipple!: ElementRef<MdRipple>;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  // htmlFor!: string;
  // control!: HTMLElement;

  public attach = (control: HTMLElement): void => {
    // this.control = control;
    this.ngxMdRipple.nativeElement.attach(control);
  }

  public detach = (): void => {
    this.ngxMdRipple.nativeElement.detach();
  }
}
