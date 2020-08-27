import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocataire',
  templateUrl: './allocataire.component.html',
  styleUrls: ['./allocataire.component.css']
})
export class AllocataireComponent implements OnInit {
  section: string = 'css';

  constructor() { }

  ngOnInit(): void {
  }

  setSection(section: string){
    this.section = section;
  }

}
