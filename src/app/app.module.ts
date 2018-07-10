import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { LayoutComponent} from './layout/layout.component';
import { LayoutModule} from './layout/layout.module';

import { AppRoutingModule} from './app.routing';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: LayoutComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    LayoutModule,
    ReactiveFormsModule,
    //AppRoutingModule
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
