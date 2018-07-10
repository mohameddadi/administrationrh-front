import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcoleComponent } from './ecole.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [EcoleComponent, CreateComponent]
})
export class EcoleModule { }
