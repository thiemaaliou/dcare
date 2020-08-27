import { Component, OnInit, Directive, HostListener, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  @ViewChild('loaderSwal') private loaderSwal: SwalComponent;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
  //  this.loaderSwal.fire();
  }
  checkForm(accountF: NgForm){
    if(accountF.invalid)
      return false;
    else
      this.confirmSwal.fire();
  }

  processRegister(accountF: NgForm){
      $('.preloader').fadeIn('slow');
     this.authService.register(this.user).subscribe((resp) => {
       $('.preloader').fadeOut('slow');
       if(resp['code'] == 200){
         this.swalOpt.title = "Traitement effectué avec succès";
         this.swalOpt.text = " Votre compte a été bien enregistré. Veuillez vérifier votre boite mail pour l'activation";
         this.swalOpt.icon = "success";
         accountF.reset();
         this.router.navigate(['/']);
       }else{
         this.swalOpt.title = "Erreur";
         this.swalOpt.text = "Une erreur est survenue lors du traitement de la demande. Veuillez vérifier vos champs et réessayer SVP";
         this.swalOpt.icon = "error";
       }
       setTimeout(() => {
         this.loaderSwal.fire();
       }, 300);

     }, error => {
       $('.preloader').fadeOut('slow');
       this.swalOpt.title = "Erreur";
       this.swalOpt.text = "Une erreur est survenue lors du traitement de la demande. Veuillez vérifier  réessayer plutard SVP";
       this.swalOpt.icon = "error";
       setTimeout(() => {
         this.loaderSwal.fire();
       }, 300);

     });
  }

}

export class Account{
  id?: number;
  firstName: string;
  lastName: string;
  phone?: number;
  email: string;
  login: string;
  typeCompte: string;
  activationFrontUrl: string = environment.appUrl+'activate';

}
