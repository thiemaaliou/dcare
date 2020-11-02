import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formalite-immatriculation',
  templateUrl: './formalite-immatriculation.component.html',
  styleUrls: ['./formalite-immatriculation.component.css']
})
export class FormaliteImmatriculationComponent implements OnInit {
  section: string = 'css';

  constructor() { }

  ngOnInit(): void {
  }

  setSection(section: string){
    this.section = section;
  }

}
