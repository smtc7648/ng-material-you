import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'theming',
    loadChildren: () =>
      import('./modules/theming/theming.module').then((m) => m.ThemingModule),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./modules/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
