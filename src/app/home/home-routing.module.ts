import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'landing', 
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/landing/landing.module').then(m => m.LandingPageModule)
          }
        ]
      },
      {
        path: 'about', 
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'login', 
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'services', 
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/services/services.module').then(m => m.ServicesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/landing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
