import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { PatientsidePage } from './patientside.page';

const routes: Routes = [
  {
    path: '',
    component: PatientsidePage
  },
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsidePageRoutingModule {}
