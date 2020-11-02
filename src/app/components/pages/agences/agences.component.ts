import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {
  lat = 14.499454;
  lng = -14.4455614;
  agences: any = [];
  activeSection: string = 'css';
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.authService.getReseaux().subscribe((resp) =>{
      this.agences = resp;
    });
  }
  getDataLocation(event, loc){
    console.log(event, loc)
  }

}
