import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { AuthGaurdService2 } from './service/auth-gaurd2.service';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { HomeComponent } from './home/home.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';


const routes: Routes =[
  { path: '', redirectTo: 'dashboard',pathMatch: 'full',canActivate:[AuthGaurdService]},
   {path: '',  component: AdminLayoutComponent,  children: [{  path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}],canActivate:[AuthGaurdService]},
   { path: 'login', component:SigninComponent},
   { path: 'Admin/add', component:SignupComponent,canActivate:[AuthGaurdService2]},
   { path: 'Admin/addEquipe', component:AddEquipeComponent,canActivate:[AuthGaurdService2]},
   { path: 'Admin', component:AdminComponentComponent,canActivate:[AuthGaurdService2]},
   { path: 'Home', component:HomeComponent,canActivate:[AuthGaurdService]}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
