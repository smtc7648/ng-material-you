import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { QuickStartComponent } from './components/quick-start/quick-start.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'quick-start', component: QuickStartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
