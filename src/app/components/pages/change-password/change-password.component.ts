import { Component, OnInit, Directive, HostListener, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

//  password: Account = new Account();

  //noMatchPassword: boolean = false;
  //@ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  //@ViewChild('loaderSwal') private loaderSwal: SwalComponent;
//  type: string = 'password';
  state: number = 1;
  adminAppUrl: string = environment.adminAppUrl;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateAccount();
  }
  ngAfterViewInit(): void {
  //  this.loaderSwal.fire();
  }
  activateAccount(){
    let key = this.activatedRoute.snapshot.params['key'];
    console.log(key);
    this.authService.activateAccount(key).subscribe((resp) => {
      if(resp['code'] == 200){
        this.state = 2;
      }else{
        this.state = 3;
      }
    }, error => {
      this.state = 3;
    });
  }
  // checkForm(accountF: NgForm){
  //   if(accountF.invalid ){
  //     return false;
  //   }else{
  //     if(this.password.newPassword != this.password.confirmPassword){
  //       this.noMatchPassword = true;
  //       return false;
  //     }
  //     this.noMatchPassword = false;
  //     this.confirmSwal.fire();
  //   }
  // }


  // processChange(accountF: NgForm){
  //     $('.preloader').fadeIn('slow');
  //    this.authService.register(this.password).subscribe((resp) => {
  //      $('.preloader').fadeOut('slow');
  //      if(resp['code'] == 200){
  //        this.swalOpt.title = "Traitement effectué avec succès";
  //        this.swalOpt.text = " Votre mot de passe a été bien modifié avec succès.";
  //        this.swalOpt.icon = "success";
  //        accountF.reset();
  //      }else{
  //        this.swalOpt.title = "Erreur";
  //        this.swalOpt.text = "Votre mot de passe n'a pas été modifié";
  //        this.swalOpt.icon = "error";
  //      }
  //      setTimeout(() => {
  //        this.loaderSwal.fire();
  //      }, 300);
  //
  //    }, error => {
  //      $('.preloader').fadeOut('slow');
  //      this.swalOpt.title = "Erreur";
  //      this.swalOpt.text = "Quelque chose a mal fonctionné. Veuillez vérifier vos champs et réessayer SVP";
  //      this.swalOpt.icon = "error";
  //      setTimeout(() => {
  //        this.loaderSwal.fire();
  //      }, 300);
  //
  //    });
  // }

  // showPassword(){
  //   this.type = this.type == 'password' ? 'text' : 'password';
  // }

}

export class Account{
  id?: number;
  oldPassword: string;
  newPassword: string;
  confirmPassword?: string;
  activationFrontUrl: string = environment.appUrl+'change-password';

}
