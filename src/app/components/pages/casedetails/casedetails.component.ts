import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-casedetails',
  templateUrl: './casedetails.component.html',
  styleUrls: ['./casedetails.component.css']
})
export class CasedetailsComponent implements OnInit {
  lat = 14.499454;
  lng = -14.4455614;
  constructor() { }

  ngOnInit(): void {
  }

}
