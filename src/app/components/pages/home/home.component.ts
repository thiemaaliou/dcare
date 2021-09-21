import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   slideData = [
     {
       title: "Le don vient du coeur, non de la fortune...",
       subTitle: "",
       description: "Ci soutoura",
       //description: "La plateforme NDAMLI CSS/IPRES vous offres la possibilité de faire toutes vos démarches en ligne en quelques clics seulement.",
       img: "assets/images/banniere-2.jpg",
       //btnText: "En savoir plus",
       btnUrl: "/"
     },
     {
       title: "Faire un don pour sauver des vies",
       subTitle: "",
       description: "Des milions de personnes sont dans le besoin.",

       //description: "Créée le 1er Janvier 1956, la Caisse de Sécurité Sociale du Sénégal, par la loi n° 91-33 du 26 Juin 1991, est devenue depuis un organisme de droit privé chargé d'une mission de service public.",
       img: "assets/images/banniere-3.jpg",
      // btnText: "En savoir plus",
       btnUrl: "/"
     },
     {
       title: "Le don vient du coeur, non de la fortune...",
       subTitle: "Ci soutoura",
       description: "",
       img: "assets/images/banniere-1.jpg",
     }
   ];

    logos = [
      {
        mno: 'SN_PM_OM',
        img: 'assets/images/om.png'
      },
      {
        mno: 'free',
        img: 'assets/images/fee.png'
      },
      {
        mno: 'wave',
        img: 'assets/images/wave.png'
      },
      {
        mno: 'VISA',
        img: 'assets/images/visa.png'
      },
      {
        mno: 'MASTERCARD',
        img: 'assets/images/mastercard.png'
      }
    ];

    amount: number;

    paymentType: string;

    carPayment = {
      montant: 200,
      codeService: "BANK_PAYMENT",
      numeroBeneficiaire: "",
      idPartenaire: Math.floor(Date.now() / 1000),
      url_success: "https://paysen.com/success",
      url_failed: "https://paysen.com/failed"
    }

    mobileMoneyFom = {
      montant: 200,
      codeService: "SN_PM_OM",
      numeroBeneficiaire: "",
      idPartenaire: Math.floor(Date.now() / 1000),
    }
    successPayment: boolean;
  newTab: Window;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  processPayment(url: string){

    const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    const systemZoom = width / window.screen.availWidth;
    const popupWidth = 650;
    const left = (width - popupWidth) / 2 / systemZoom + dualScreenLeft;

    this.newTab = window.open('', '_blank', 'toolbar=0, width='+popupWidth+', height='+height+', config=center left='+left);
    this.newTab.location.href = url;


  }

  setPaymentType(code: string){
    this.paymentType = code;
  }

  donateCard(){
    this.auth.initCardPayment(this.carPayment).subscribe(resp => {
      if(resp['errorCode'] == 200){
        this.processPayment(resp['urlRedirection']);
      }else{
        this.successPayment = false;
      }
    }, error => {this.successPayment = false;})
  }

  donateMobileMoney(){
    this.auth.initCardPayment(this.mobileMoneyFom).subscribe(resp => {
      if(resp['errorCode'] == 200){
        this.successPayment = true;
      }else{
        this.successPayment = false;
      }
    }, error => {this.successPayment = false;})
  }

}
