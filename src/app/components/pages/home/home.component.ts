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
        mno: 'orange',
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
        mno: 'visa',
        img: 'assets/images/visa.png'
      },
      {
        mno: 'mastercard',
        img: 'assets/images/mastercard.png'
      }
    ];

    amount: number;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  donate(amount: number){
    if(Number(amount) > 0)
      this.processOrder(Number(amount));
    else
      return;
  }

  processOrder(amount: number){
    var keyPhrase = ''+Math.floor(Date.now() / 1000);
    let paymentData = {
        "currency": "XOF",
        "order_id": "SecureBizao_"+keyPhrase,
        "amount": amount,
        "state": "BizaoTest",
        "reference": "secure_bizao_test",
        "lang": "fr",
        "client_id": environment.clientId,
        "country": "sn",
        "request_id": "SecureBizao_"+keyPhrase,
        "return_url": environment.return_url,
        "cancel_url": environment.cancel_url
    };

    const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;

     let sessionId = this.auth.encrypt(JSON.stringify(paymentData), environment.clientId);
     location.href = environment.paymentUrl+'?sessionId='+encodeURIComponent(sessionId)+'&salt='+environment.clientId;

  }

}
