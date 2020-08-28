import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  appName: string = environment.appName;
  appHost: string = environment.appHost;
  section: string = 'css';
  public _display: boolean = false;
  @Output() closedTerms =  new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set display(d: boolean){
      this._display = d;
  }

  get display(){
    return this._display;
  }

  closeTerms(accept: boolean){
    this.closedTerms.emit(accept);
  }

}
