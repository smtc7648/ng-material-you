import { Component, ElementRef, Input, ViewChild, booleanAttribute } from '@angular/core';
import { MdBrandedFab } from '@material/web/fab/branded-fab';

@Component({
  selector: 'ngx-md-branded-fab',
  templateUrl: './branded-fab.component.html',
  styleUrls: ['./branded-fab.component.scss']
})
export class BrandedFabComponent {
  @ViewChild('ngxMdBrandedFab') ngxMdBrandedFab!: ElementRef<MdBrandedFab>;

  @Input('aria-label') ariaLabel!: string;
  @Input() size!: string;
  @Input() variant!: string;
  @Input({ transform: booleanAttribute }) lowered!: boolean;
  @Input() label!: string;
  @Input('touch-target') touchTarget!: string;

  public getRenderClasses = () => {
    return this.ngxMdBrandedFab.nativeElement.getRenderClasses();
  }
}
