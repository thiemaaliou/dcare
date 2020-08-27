import { Component, OnInit, Directive, HostListener, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  state: number = 1;
  adminAppUrl: string = environment.adminAppUrl;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.activateAccount();
  }
  activateAccount(){
    let key = this.activatedRoute.snapshot.params['key'];

    this.authService.activateAccount(key).subscribe((resp) => {
      if(resp['code'] == 200){
        this.state = 2;
      }else{
        this.state = 3;
      }
    }, error => {
      this.state = 3;
    });
  }


}
