import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebControlsModule } from 'ngx-material-you';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
