import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcoleComponent } from './ecole.component';
import { EcoleCreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EcoleService } from './ecole.service';
import { EcoleRoutingModule } from './ecole.routing';
import { EcoleListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EcoleRoutingModule
  ],
  providers : [EcoleService],
  declarations: [EcoleComponent, EcoleCreateComponent, EcoleListComponent]
})
export class EcoleModule { }
