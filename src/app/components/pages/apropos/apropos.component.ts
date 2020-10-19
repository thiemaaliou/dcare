import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AProposComponent implements OnInit {
  section: string = 'css';

  constructor() { }

  ngOnInit(): void {
  }

  setSection(section: string){
    this.section = section;
  }

}
