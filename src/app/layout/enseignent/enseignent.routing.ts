import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {EnseignentListComponent} from './enseignent-list/enseignent-list.component';
import {EnseignentCreateComponent} from './enseignent-create/enseignent-create.component';
import { EnseignentComponent} from './enseignent.component';


const routes: Routes = [

    {
        path : '' , component : EnseignentComponent,
        children : [
            { path: 'list', component: EnseignentListComponent},
             {path: 'create', component: EnseignentCreateComponent},
             {path: 'edit/:id', component: EnseignentCreateComponent}
        ]
    }

    


];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }