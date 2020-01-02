import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EcoleComponent } from './ecole.component';
import { EcoleListComponent } from './list/list.component';
import { EcoleCreateComponent } from './create/create.component';


const routes: Routes = [

    {
        path : '' , component : EcoleComponent,
        children : [
            { path: 'list', component: EcoleListComponent},
             {path: 'create', component: EcoleCreateComponent},
             {path: 'edit/:id', component: EcoleCreateComponent}
        ]
    }

    


];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class EcoleRoutingModule { }