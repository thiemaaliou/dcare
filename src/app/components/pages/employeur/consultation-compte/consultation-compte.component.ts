import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation-compte',
  templateUrl: './consultation-compte.component.html',
  styleUrls: ['./consultation-compte.component.css']
})
export class ConsultationCompteComponent implements OnInit {
  section: string = 'css';

  constructor() { }

  ngOnInit(): void {
  }

  setSection(section: string){
    this.section = section;
  }

}
