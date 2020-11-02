import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande-attestation',
  templateUrl: './demande-attestation.component.html',
  styleUrls: ['./demande-attestation.component.css']
})
export class DemandeAttestationComponent implements OnInit {
  section: string = 'css';

  constructor() { }

  ngOnInit(): void {
  }

  setSection(section: string){
    this.section = section;
  }

}
