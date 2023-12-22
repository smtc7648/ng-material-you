import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from 'projects/ngx-material-web/src/lib/core/web-controls/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-material-you-sample-app';

  @ViewChild('sampleDialog') dialog!: DialogComponent;
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
}
