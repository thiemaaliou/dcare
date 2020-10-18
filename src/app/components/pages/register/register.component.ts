import { Component, OnInit, Directive, HostListener, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
declare let $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  displayTerms: boolean = false;
  accoutType = [
    {id: 'EMPLOYEUR', name: "Employeur"},
    {id: 'EMPLOYE', name: "Employé"},
    {id: 'ALLOCATAIRE', name: "Allocataire"}
  ];
  user: Account = new Account();
  swalOpt = {
    title: '',
    text: '',
    icon: ''
  };
  siteKey:string = environment.siteCapchatKey;
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  @ViewChild('loaderSwal') private loaderSwal: SwalComponent;
  constructor(private authService: AuthService, private router: Router, private plf: PlatformLocation, private toastr: ToastrService) { }

  ngOnInit(): void {
    let port =( this.plf.port && Number(this.plf.port) > 0 )? ':'+this.plf.port : '';
    const ltindex = this.plf['location']['href'].lastIndexOf('/');
    const pt = this.plf['location']['href'].substring(0, ltindex)+'/activate';
  }
  ngAfterViewInit(): void {
  }
  checkForm(accountF: NgForm){
    if(accountF.invalid || !this.user.acceptCondition)
      return false;
    else
      this.confirmSwal.fire();
  }

  processRegister(accountF: NgForm){
      $('.preloader').fadeIn('slow');

    //  let port =( this.plf.port && Number(this.plf.port) > 0 )? ':'+this.plf.port : '';
    //  this.user.activationFrontUrl = this.plf.protocol+'//'+this.plf.hostname+port+'/activate';
    const ltindex = this.plf['location']['href'].lastIndexOf('/');
    this.user.activationFrontUrl = this.plf['location']['href'].substring(0, ltindex)+'/activate';

      this.authService.register(this.user).subscribe((resp) => {
       $('.preloader').fadeOut('slow');
       if(resp['code'] == 200){
         this.toastr.success(
           " Votre compte a été bien enregistré. Veuillez vérifier votre boite mail pour l'activation",
           "Traitement effectué avec succès"
         );
         setTimeout(() => {
           accountF.reset();
           this.router.navigate(['/']);
         }, 2000);
       }else{
         this.toastr.error(
           "Une erreur est survenue lors du traitement de la demande. Veuillez vérifier vos champs et réessayer SVP",
           "Erreur"
         );
       }

     }, error => {
       $('.preloader').fadeOut('slow');
       this.toastr.error(
          "Une erreur est survenue lors du traitement de la demande. Veuillez vérifier  réessayer plutard SVP",
         "Erreur"
       );
     });
  }

  showTermesConditions(){
    this.displayTerms = true;
  }

  responseUserFromTermes(event: boolean){
    this.displayTerms = false;
    this.user.acceptCondition = event;
  } handleReset() { }

  handleExpire() { }

  handleLoad() { }

  handleSuccess(event) { }

  handleError(event) {}

}

export class Account{
  id?: number;
  firstName: string;
  lastName: string;
  phone?: number;
  email: string;
  login: string;
  typeCompte: string;
  acceptCondition: boolean = false;
  activationFrontUrl: string = environment.appUrl+'activate';
  recaptcha: string;

}
