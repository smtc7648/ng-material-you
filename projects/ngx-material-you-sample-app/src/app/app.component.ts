import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogComponent } from 'projects/ngx-material-web/src/lib/core/web-controls/dialog/dialog.component';
import { MenuComponent } from 'projects/ngx-material-web/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('usageMenuById') usageMenuById!: MenuComponent;
  @ViewChild('sampleDialog') dialog!: DialogComponent;
  @ViewChild('sideBar') sidebar!: ElementRef<HTMLDivElement>;
  title = 'ngx-material-you-sample-app';
  isDialogOpened = false;

  onOpen(): void {
    console.log("onOpen");
  }

  onOpend(): void {
    console.log('onOpened');
    this.isDialogOpened = true;
  }

  onClose(): void {
    console.log("onClose");
  }

  onClosed(): void {
    console.log('onClosed');
    this.isDialogOpened = false;
  }

  onCancel(): void {
    console.log('onCancel');
  }

  onClickOpenDialog(): void {
    this.dialog.show();
    console.log(this.dialog.getOpenAnimation);
  }

  onClickDialogAction(action: string): void {
    action = action.toLowerCase();
    switch(action) {
      case 'ok':
      case 'close':
      case 'esc':
      case 'enter':
        this.dialog.closeDialog(action);
        break;
      default: //DO Nothing
    }
  }

  onClickSetWithIdRef(e: Event): void {
    this.usageMenuById.show();
  }

  onUsageMenuByIdOpened(): void {
    console.log("menu opened");
  }

  onUsageMenuByIdClosed(): void {
    console.log("menu closed");
  }

  onSwitchInput(e: any): void {
    console.log("Switch Input Triggered");
    console.log(e);
  }

  onSwitchChange(e: any): void {
    console.log("Switch Change Triggered");
    console.log(e);
  }

  onClickToggleMenu(e: Event) {
    this.sidebar.nativeElement.classList.toggle('hide');
  }

  onTabChanges(e: any) {
    console.log("ON TAB CHANGE")
  }
}
