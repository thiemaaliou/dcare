import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declaration-nominative',
  templateUrl: './declaration-nominative.component.html',
  styleUrls: ['./declaration-nominative.component.css']
})
export class DeclarationNominativeComponent implements OnInit {
  section: string = 'css';

  constructor() { }

  ngOnInit(): void {
  }

  setSection(section: string){
    this.section = section;
  }

}
