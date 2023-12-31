import { Component, Input, ViewChild } from '@angular/core';
import { ListItem } from '@material/web/list/internal/list-navigation-helpers';
import { MdList } from '@material/web/list/list';

@Component({
  selector: 'ngx-md-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @ViewChild('ngxMdList') ngxMdList!: MdList;
  @Input() style!: string;
  items!: ListItem[];

  public activateNextItem = () : ListItem | null => {
    return this.ngxMdList.activateNextItem();
  }

  public activatePreviousItem = () : ListItem | null => {
    return this.ngxMdList.activatePreviousItem();
  }
}
