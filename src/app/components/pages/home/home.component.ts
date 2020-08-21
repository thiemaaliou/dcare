import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   slideData = [
     {
       title: "IPRES Sénégal<br> Votre solution",
       subTitle: "L'Institution de Prévoyance Retraites du Sénégal",
       description: "L'institution de Prévoyance Retraite du Sénégal (I.P.RE.S.) est un organisme de droit privé placé sous la tutelle technique et financière de l'Etat.",
       img: "assets/images/banner-bg-1.1.png",
       btnText: "En savoir plus",
       btnUrl: "/services"
     },
     {
       title: "Caisse de sécurité <br>sociale",
       subTitle: "Caisse de sécurité sociale",
       description: "Créée le 1er Janvier 1956, la Caisse de Sécurité Sociale du Sénégal, par la loi n° 91-33 du 26 Juin 1991, est devenue depuis un organisme de droit privé chargé d'une mission de service public.",
       img: "assets/images/banner-bg-1.2.png",
       btnText: "En savoir plus",
       btnUrl: "/services"
     },
     {
       title: "Paiement en ligne <br> IPRES CSS",
       subTitle: "IPRES & CSS",
       description: "Elle dispose d'agences régionales, de centres de protection maternelle et infantile, de cliniques et de plannings familiaux. L'Institution de Prévoyance Retraites du Sénégal (IPRES) gère le régime national obligatoire d'assurance vieillesse",
       img: "assets/images/banner-bg-1.3.png",
       btnText: "En savoir plus",
       btnUrl: "/services"
     }
   ];
   employeurData = [
     {
       img: "assets/images/case-studies-1.png",
       title: "Création de compte",
       description: "Demande de création d'un compte d'accès à votre espace privé employeur. La création de compte est gratuit et ne prends pas plus 2 minutes. Vous devez fournir juste les informations nécessaires pour procéder à la création du compte.",
       icon: "folder"
     },
     {
       img: "assets/images/case-studies-2.png",
       title: "Consultation de compte",
       description: "Les cotisations sont assises sur la rémunération brute des intéressés jusqu’à concurrence d’un plafond fixé chaque année par le Conseil d’Administration. L’assiette de cotisation représente toutes sommes versées ou dues au travailleur ou à l’occasion d’un travail",
       icon: "eye"
     },
     {
       img: "assets/images/case-studies-3.png",
       title: "Demande attestation en ligne",
       description: "Demandez une attestion ",
       icon: "file-pdf"
     },
     {
       img: "assets/images/case-studies-4.png",
       title: "Paiement cotisations en ligne",
       description: "Payez vos cotisations",
       icon: "credit-card"
     },
     {
       img: "assets/images/case-studies-5.png",
       title: "Formalités d’Immatriculation",
       description: "Demandez une Immatriculation",
       icon: "window-restore"
     },
     {
       img: "assets/images/case-studies-6.png",
       title: "Déclaration nominative des rémunérations en ligne",
       description: "Déclaration des rémunérations",
       icon: "book"
     },
   ];
   employeData= [
     {
       img: "assets/images/case-studies-1.png",
       title: "Régime de retraite",
       icon: "draw-polygon",
       description: "Le Régime Général. Tout membre participant est automatiquement affilié au Régime Général. Le taux de cotisation pour le Régime général est de 14% (8,4% part employeur et 5,6% part du salarié)."
     },
     {
        img: "assets/images/case-studies-1.png",
        title: "Reconctituer votre carrière",
        icon: "grin-hearts",
        description: "Tout membre participant peut demander son relevé de points ou sa carte d’affiliation. Le relevé de points est obtenu sur demande écrite en joignant  une attestation ou certificat de travail et une copie légalisée de la carte d’identité nationale."
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Allocations familliales",
       icon: "users",
       description: "Pour bénéficier des prestations familiales servies par la Caisse de Sécurité Sociale, vous devez fournir un dossier contenant les pièces suivantes: Une demande de prestations familiales, Une déclaration de mouvement de travailleur..."
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Congé maternité",
       icon: "child",
       description: "Au moment du départ en congé de maternité.Remplir une demande d'indemnités de congé de maternité fournie par la Caisse. Une attestation de travail signée par l'employeur, Un certificat médical de grossesse..."
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Accident du travail",
       icon: "user-tie",
       description: "Lorsqu'un de vos salariés est victime d'un accident du travail vous êtes soumis aux formalités suivantes : Faire une déclaration d'AT/MP dans les 48h, Bulletin de salaire En même temps que la déclaration d'AT/MP quand il y a arrêt de travail..."
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Accident du trajet",
       icon: "shuttle-van",
       description: "Lorsqu'un de vos salariés est victime d'un accident du travail vous êtes soumis aux formalités suivantes : Faire une déclaration d'AT/MP dans les 48h, Bulletin de salaire En même temps que la déclaration d'AT/MP quand il y a arrêt de travail..."
     }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
