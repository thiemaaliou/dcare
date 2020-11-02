import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  appName: string = environment.appName;
  appHost: string = environment.appHost;
  footerText: any = environment.footerText;
  constructor() { }

  ngOnInit(): void {
  }

}
