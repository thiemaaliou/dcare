import { Component, OnInit, ViewChild } from '@angular/core';
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
    {id: 'CABINET', name: "Cabinet"},
   // {id: 'ALLOCATAIRE', name: "Allocataire"}
  ];
  user: Account = new Account();
  emailError = "";
  loginError = "";
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
  checklogin(type,data) {
    this.loginError = "";
    if (this.user.login != '') {
      let datas = {
       'type':type,
       'value':data
      } 
      this.authService.checkUser(datas).subscribe((resp) => {
        if(resp['code'] == 200){
          if(resp['exists'] == true){
            this.loginError = "Le nom d'utilisateur existe déja";
          }
      }}, error => {
        this.toastr.error(
           "Une erreur est survenue lors du traitement de la demande. Veuillez vérifier  réessayer plutard SVP",
          "Erreur"
        );
      });
   }
  }
  checkEmail(type,data) {
    this.emailError = "";
    if (this.user.email != '') {
      let datas = {
       'type':type,
       'value':data
      } 
      this.authService.checkUser(datas).subscribe((resp) => {
        if(resp['code'] == 200){
          if(resp['exists'] == true){
            this.emailError = "L'adresse email existe déja";
          }
      }}, error => {
        this.toastr.error(
           "Une erreur est survenue lors du traitement de la demande. Veuillez vérifier  réessayer plutard SVP",
          "Erreur"
        );
      });
   }
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
