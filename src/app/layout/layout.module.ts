import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';


import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { routing} from './layout.routing';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    routing
  ],
  declarations: [LayoutComponent],
  exports :[LayoutComponent]
})
export class LayoutModule { }
