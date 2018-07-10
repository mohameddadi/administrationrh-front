import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/layout/layout.module#LayoutModule' },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes , {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
