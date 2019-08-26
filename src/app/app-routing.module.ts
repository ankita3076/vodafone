import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { MasterComponent } from './pages/master/master.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { PhonesComponent } from './pages/phones/phones.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'dashboard',
    component: MasterComponent,
    children: [
      {
        path: 'phones', 
        component: PhonesComponent,
        canActivate: [AuthenticationGuard] 
      },
      {
        path: 'phones/:id',
        component: PhoneComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
