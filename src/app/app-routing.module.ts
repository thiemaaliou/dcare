import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { AgencesComponent } from './components/pages/agences/agences.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { AllocataireComponent } from './components/pages/allocataire/allocataire.component';
import { AProposComponent } from './components/pages/apropos/apropos.component';


const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'apropos',component: AProposComponent
  },
  {
    path:'employeur',
    loadChildren: () => import('./components/pages/employeur/employeur.module').then( m => m.EmployeurModule)
  },
  {
    path:'employe-details',component: EmployeeComponent
  },
  {
    path:'allocataire-details',component: AllocataireComponent
  },
  {
    path:'agences',component: AgencesComponent
  },
  {
    path:'register',component: RegisterComponent
  },
  {
    path:'activate/:key',component: ChangePasswordComponent
  },
  {
    path:'**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
