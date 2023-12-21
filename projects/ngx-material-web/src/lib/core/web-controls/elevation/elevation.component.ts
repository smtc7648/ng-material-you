import { Component, Input, OnInit, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'ngx-md-elevation',
  templateUrl: './elevation.component.html',
  styleUrls: ['./elevation.component.scss']
})
export class ElevationComponent implements OnInit {
  @Input({ alias: 'elevation-level', required: true, transform: numberAttribute }) elevationLevel!: number;
  @Input({ transform: booleanAttribute }) animated!: boolean;

  ngOnInit(): void {
    if (this.elevationLevel > 5)
      this.elevationLevel = 5;
    else if (this.elevationLevel < 0)
      this.elevationLevel = 0;
  }
}
