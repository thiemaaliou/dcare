import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AProposComponent} from './components/pages/apropos/apropos.component';


const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'apropos',component: AProposComponent
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
