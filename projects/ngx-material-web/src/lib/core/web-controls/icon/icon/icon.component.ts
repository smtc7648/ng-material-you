import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-md-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() slot!: string;
  @Input() viewBox!: string;
}
