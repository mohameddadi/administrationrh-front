import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignentRoutingModule } from './enseignent-routing.module';
import { EnseignentListComponent } from './enseignent-list/enseignent-list.component';
import { EnseignentCreateComponent } from './enseignent-create/enseignent-create.component';
import { EnseignentService} from './enseignent.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EnseignentComponent } from './enseignent.component';
import { AppRoutingModule } from './enseignent.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MyDatePickerModule,

  ],
  providers : [EnseignentService],
  declarations: [EnseignentListComponent, EnseignentCreateComponent, EnseignentComponent],
  exports : [
    EnseignentListComponent, EnseignentCreateComponent, EnseignentComponent
  ]
})
export class EnseignentModule { }
