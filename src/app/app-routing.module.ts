import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { AgencesComponent } from './components/pages/agences/agences.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { AllocataireComponent } from './components/pages/allocataire/allocataire.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'employeur-details',component: BlogdetailsComponent
  },
  {
    path:'employe-details',component: EmployeeComponent
  },
  {
    path:'allocataire-details',component: AllocataireComponent
  },
  {
    path:'blog-grid',component:BloggridComponent
  },
  {
    path:'agences',component: AgencesComponent
  },
  {
    path:'faqs',component:FaqComponent
  },
  {
    path:'contact-us',component:ContactComponent
  },
  {
    path:'pricing',component:PricingComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'service-detail',component:ServicedetailComponent
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
