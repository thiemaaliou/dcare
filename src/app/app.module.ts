import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthService } from './services/auth.service';
import { FocusDirective } from './directive/focus.directive';
import { ChangeInputDirective } from './directive/change-input.directive';
import { HttpClientModule } from '@angular/common/http';
import { TermsComponent } from './components/pages/terms/terms.component';
import { SharedModule } from './shared/shared.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { AProposComponent } from './components/pages/apropos/apropos.component';
import { AlphaNumericDirective } from './directive/alpha-numeric.directive';
import { NoSpaceDirective } from './directive/no-space.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TermsComponent,
    FocusDirective,
    ChangeInputDirective,
    PreloaderComponent,
    AProposComponent,
    AlphaNumericDirective,
    NoSpaceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxCaptchaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwMP4QNMrB3z7ozZAMKOb1sQpk5eKJLFg'
    })
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
