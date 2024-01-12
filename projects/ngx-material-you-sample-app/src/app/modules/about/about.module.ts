import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { QuickStartComponent } from './components/quick-start/quick-start.component';
import { IntroductionComponent } from './components/introduction/introduction.component';


@NgModule({
  declarations: [
    AboutComponent,
    IntroductionComponent,
    QuickStartComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
