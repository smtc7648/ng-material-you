import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { Tab } from '@material/web/tabs/internal/tab';
import { MdTabs } from '@material/web/tabs/tabs';

@Component({
  selector: 'ngx-md-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @ViewChild('ngxMdTabs') ngxMdTabs!: ElementRef<MdTabs>;
  @Input({ alias: 'aria-label' }) ariaLabel!: string;
  @Input({ alias: 'auto-activate', transform: booleanAttribute }) autoActivate!: boolean;

  // tabs!: Tab[];
  // activeTab!: Tab;
  // activeTabIndex!: number;

  @Output() change: EventEmitter<void> = new EventEmitter();

  onChange = (e: Event): void => {
    this.change.emit();
  };

  public scrollToTab = (tabToScrollTo: Tab | null | undefined): Promise<void> => {
    return this.ngxMdTabs.nativeElement.scrollToTab(tabToScrollTo);
  }
}
