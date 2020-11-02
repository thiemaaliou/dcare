import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   slideData = [
     {
       title: "Bienvenue sur le portail<br> NDAMLI CSS/IPRES",
       subTitle: "",
       description: "Vos démarches en un seul clic !",
       //description: "La plateforme NDAMLI CSS/IPRES vous offres la possibilité de faire toutes vos démarches en ligne en quelques clics seulement.",
       img: "assets/images/bannieres-ipres-2.jpg",
       //btnText: "En savoir plus",
       btnUrl: "/employeur"
     },
     {
       title: "Portail numérique commun CSS/IPRES",
       subTitle: "Vos démarches en un seul clic !",
       description: "La plateforme NDAMLI CSS/IPRES vous offres la possibilité de faire toutes vos démarches en ligne en quelques clics seulement.",

       //description: "Créée le 1er Janvier 1956, la Caisse de Sécurité Sociale du Sénégal, par la loi n° 91-33 du 26 Juin 1991, est devenue depuis un organisme de droit privé chargé d'une mission de service public.",
       img: "assets/images/bannieres-ipres-3.jpg",
      // btnText: "En savoir plus",
       btnUrl: "/employeur"
     },
     {
       title: "Paiement en ligne <br> IPRES/CSS",
       subTitle: "Paiement sécurisé et rapide",
       description: "La plateforme NDAMLI vous offre la possibilité de payer en ligne de manière sécurisée et très simple",
       img: "assets/images/bannieres-ipres-1.jpg",
     }
   ];
   employeurData = [
     {
       img: "assets/images/case-studies-1.png",
       title: "Création de compte",
       description: "Demande de création d'un compte d'accès à votre espace privé employeur. La création de compte est gratuit et ne prends pas plus 2 minutes. Vous devez fournir juste les informations nécessaires pour procéder à la création du compte.",
       icon: "folder",
       url: '/employeur/creation-compte'
     },
     {
       img: "assets/images/case-studies-2.png",
       title: "Consultation de compte",
       description: "Les cotisations sont assises sur la rémunération brute des intéressés jusqu’à concurrence d’un plafond fixé chaque année par le Conseil d’Administration. L’assiette de cotisation représente toutes sommes versées ou dues au travailleur ou à l’occasion d’un travail",
       icon: "eye",
       url: '/employeur/creation-compte'
     },
     {
       img: "assets/images/case-studies-3.png",
       title: "Demande attestation en ligne",
       description: "Demandez une attestion ",
       icon: "file-pdf",
       url: '/employeur/demande-attestation'
     },
     {
       img: "assets/images/case-studies-4.png",
       title: "Paiement cotisations en ligne",
       description: "Payez vos cotisations",
       icon: "credit-card",
       url: '/employeur/paiement-cotisations'
     },
     {
       img: "assets/images/case-studies-5.png",
       title: "Formalités d’Immatriculation",
       description: "Demandez une Immatriculation",
       icon: "window-restore",
       url: '/employeur/formalite-immatriculation'
     },
     {
       img: "assets/images/case-studies-6.png",
       title: "Déclaration nominative des rémunérations en ligne",
       description: "Déclaration des rémunérations",
       icon: "book",
       url: '/employeur/declaration-nominative'
     },
   ];

   employeData= [
     {
       img: "assets/images/case-studies-1.png",
       title: "Vos droits et devoirs",
       icon: "draw-polygon",
       description: "Tout salarié est considéré comme membre participant à compter de son embauchage et au plus tôt à partir de son dix-huitième anniversaire. "
     },
     {
        img: "assets/images/case-studies-1.png",
        title: "Qu'est-ce qu'un participant?",
        icon: "grin-hearts",
        description: "Les salariés actifs sont désignés sous le nom de Participants ou Cotisants. L'IPRES attribue un numéro unique pour toute son existence à chaque participant."
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Les conditions d’âge d'un participant",
       icon: "users",
       description: "S'assurer que votre employeur vous a bien déclaré et que les cotisations sont bien prélevées (voir vos bulletins de paie). "
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Votre régime de retraite - Le Régime Général",
       icon: "child",
       description: "Tout membre participant est automatiquement affilié au Régime Général. Le taux de cotisation pour le Régime général est de 14% (8,4% part employeur et 5,6% part du salarié)."
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Votre régime de retraite - Le Régime cadre",
       icon: "user-tie",
       description: "Le salarié est considéré comme cadre, lorsqu’il : - possède une formation technique, administrative, juridique, commerciale ou financière résultant, "
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Votre régime de retraite - Le Régime employé maison",
       icon: "user-tie",
       description: "Est considéré comme employé de maison, tout salarié embauché au service d’un foyer et occupé d’une façon continue au domicile privé de l’employeur"
     },
     {
       img: "assets/images/case-studies-1.png",
       title: "Accédez à votre situation",
       icon: "users",
       description: "Tout membre participant peut demander son relevé de points ou sa carte d’affiliation. Le relevé de points est obtenu sur demande écrite en joignant  une attestation ou certificat de travail et une copie légalisée de la carte d’identité nationale"
     },
   ];

   allocataireData = [
     {
       img: "assets/images/pension.png",
       title: "La pension de retraite",
       icon: "draw-polygon",
     },
     {
       img: "assets/images/veuve.png",
       title: "La pension de veuve / veuf",
       icon: "draw-polygon",
     },
     {
       img: "assets/images/orphelin.png",
       title: "La pension d'orphelin(s)",
       icon: "draw-polygon",
     },
     {
       img: "assets/images/solidarite.png",
       title: "L'Allocation de Solidarité",
       icon: "draw-polygon",
     },
     {
       img: "assets/images/forfaitaire.png",
       title: "L'Allocation forfaitaire",
       icon: "draw-polygon",
     },
     {
       img: "assets/images/fond.png",
       title: "Le fond social",
       icon: "draw-polygon",
     }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
