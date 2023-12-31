import { Component, ElementRef, Input, OnInit, ViewChild, booleanAttribute } from '@angular/core';
import { MdElevatedButton } from '@material/web/button/elevated-button';

@Component({
  selector: 'ngx-md-elevated-button',
  templateUrl: './elevated-button.component.html',
  styleUrls: ['./elevated-button.component.scss']
})
export class ElevatedButtonComponent {
  @ViewChild('ngxMdElevatedButton') ngxMdElevatedButton!: ElementRef<MdElevatedButton>;
  @Input('aria-label') ariaLabel!: string;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input() href!: string;
  @Input() target!: string;
  @Input({ alias: 'trailing-icon', transform: booleanAttribute }) trailingIcon!: boolean;
  @Input({ alias: 'has-icon', transform: booleanAttribute }) hasIcon!: boolean;
  @Input() type: string = 'submit';
  @Input() value: string = '';

  // name?: string = undefined;
  // form?: HTMLFormElement = undefined;
}
