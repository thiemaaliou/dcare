import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {NgForm} from '@angular/forms';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

declare let $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  displayTerms: boolean = false;
  captchaSiteKey = environment.siteCapchatKey
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
  siteKey: string = environment.siteCapchatKey;
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  @ViewChild('loaderSwal') private loaderSwal: SwalComponent;
  @ViewChild('accountForm') private accountForm: NgForm;
  loginRequired: boolean = false;
  firstNameRequired: boolean = false;
  lastNameRequired: boolean = false;
  emailRequired: boolean = false;
  emailPattern: boolean = false;
  typeRequired: boolean = false;

  constructor(private authService: AuthService, private router: Router, private plf: PlatformLocation, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    // let port =( this.plf.port && Number(this.plf.port) > 0 )? ':'+this.plf.port : '';
    // const ltindex = this.plf['location']['href'].lastIndexOf('/');
    // const pt = this.plf['location']['href'].substring(0, ltindex)+'/activate';
  }

  checkForm(accountF: NgForm) {
    if (accountF.invalid || !this.user.acceptCondition)
      return false;
    else {
      console.log('accountForm', accountF);
      this.confirmSwal.fire();
    }
  }

  processRegister(accountF: NgForm) {
    $('.preloader').fadeIn('slow');

    //  let port =( this.plf.port && Number(this.plf.port) > 0 )? ':'+this.plf.port : '';
    //  this.user.activationFrontUrl = this.plf.protocol+'//'+this.plf.hostname+port+'/activate';
    const ltindex = this.plf['location']['href'].lastIndexOf('/');
    this.user.activationFrontUrl = this.plf['location']['href'].substring(0, ltindex) + '/activate';

    this.authService.register(this.user).subscribe((resp) => {
      $('.preloader').fadeOut('slow');
      if (resp['code'] == 200) {
        this.toastr.success(
          " Votre compte a été bien enregistré. Veuillez vérifier votre boite mail pour l'activation",
          "Traitement effectué avec succès"
        );
        setTimeout(() => {
          accountF.reset();
          this.router.navigate(['/']);
        }, 2000);
      } else {
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

  isntPopulate(fieldName) {
    if (fieldName == 'firstName')
      this.firstNameRequired = !!this.accountForm.form.controls[fieldName].errors?.required;
    if (fieldName == 'lastName')
      this.lastNameRequired = !!this.accountForm.form.controls[fieldName].errors?.required;
  }

  checklogin(type, data) {
    this.loginRequired = !!this.accountForm.form.controls.login.errors?.required;
    this.loginError = "";
    if (this.user.login != '') {
      let datas = {
        'type': type,
        'value': data
      }
      this.authService.checkUser(datas).subscribe((resp) => {
        if (resp['code'] == 200) {
          if (resp['exists'] == true) {
            this.loginError = "Le nom d'utilisateur existe déjà";
          }
        }
      }, error => {
        // this.toastr.error(
        //   "Une erreur est survenue lors du traitement de la demande. Veuillez vérifier  réessayer plutard SVP",
        //   "Erreur"
        // );
      });
    }
  }

  checkEmail(type, data) {
    this.emailRequired = !!this.accountForm.form.controls.email.errors?.required;
    this.emailPattern = !!this.accountForm.form.controls.email.errors?.pattern;
    this.emailError = "";
    if (this.user.email != '') {
      let datas = {
        'type': type,
        'value': data
      }
      this.authService.checkUser(datas).subscribe((resp) => {
        if (resp['code'] == 200) {
          if (resp['exists'] == true) {
            this.emailError = "L'adresse email existe déjà";
          }
        }
      }, error => {
        // this.toastr.error(
        //   "Une erreur est survenue lors du traitement de la demande. Veuillez vérifier  réessayer plutard SVP",
        //   "Erreur"
        // );
      });
    }
  }

  showTermesConditions() {
    this.displayTerms = true;
  }

  responseUserFromTermes(event: boolean) {
    this.displayTerms = false;
    this.user.acceptCondition = event;
  }

  handleReset() {
  }

  handleError(event) {
  }

  checkEmailPattern() {
    this.emailPattern = !!this.accountForm.form.controls.email.errors?.pattern;
  }
}

export class Account {
  id?: number;
  firstName: string;
  lastName: string;
  phone?: number;
  email: string;
  login: string;
  typeCompte: string;
  acceptCondition: boolean = false;
  activationFrontUrl: string = environment.appUrl + 'activate';
  recaptcha: string;
}
