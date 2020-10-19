import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement-cotisations',
  templateUrl: './paiement-cotisations.component.html',
  styleUrls: ['./paiement-cotisations.component.css']
})
export class PaiementCotisationsComponent implements OnInit {
  section: string = 'css';

  constructor() { }

  ngOnInit(): void {
  }

  setSection(section: string){
    this.section = section;
  }

}
