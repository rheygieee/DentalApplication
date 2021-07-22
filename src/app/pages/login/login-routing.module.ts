import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsidePage } from 'src/app/patientside/patientside.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'patientside',
    component: PatientsidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
