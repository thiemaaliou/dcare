import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';
import { ConsultationCompteComponent } from './consultation-compte/consultation-compte.component';
import { DeclarationNominativeComponent } from './declaration-nominative/declaration-nominative.component';
import { DemandeAttestationComponent } from './demande-attestation/demande-attestation.component';
import { FormaliteImmatriculationComponent } from './formalite-immatriculation/formalite-immatriculation.component';
import { PaiementCotisationsComponent } from './paiement-cotisations/paiement-cotisations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'creation-compte'
  },
  {
    path:'creation-compte',
    component: CreationCompteComponent
  },
  {
    path:'consultation-compte',
    component: ConsultationCompteComponent
  },
  {
    path:'declaration-nominative',
    component: DeclarationNominativeComponent
  },
  {
    path:'demande-attestation',
    component: DemandeAttestationComponent
  },
  {
    path:'formalite-immatriculation',
    component: FormaliteImmatriculationComponent
  },
  {
    path:'paiement-cotisations',
    component: PaiementCotisationsComponent
  }
];

@NgModule({
  declarations: [
    CreationCompteComponent,
    ConsultationCompteComponent,
    DeclarationNominativeComponent,
    DemandeAttestationComponent,
    FormaliteImmatriculationComponent,
    PaiementCotisationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeurModule { }
