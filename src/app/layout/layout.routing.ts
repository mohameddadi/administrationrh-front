import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EnseignentListComponent } from './enseignent/enseignent-list/enseignent-list.component';
import { LayoutComponent} from './layout.component';


import { EnseignentModule} from './enseignent/enseignent.module';

const routes: Routes = [
  
  {
    path: '',
    component : LayoutComponent,
    children : [
      {path: 'enseignents',loadChildren: 'app/layout/enseignent/enseignent.module#EnseignentModule'}
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);