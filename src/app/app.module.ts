import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { BlogsidebarComponent } from './components/layouts/blogsidebar/blogsidebar.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';;
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { AgencesComponent } from './components/pages/agences/agences.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AuthService } from './services/auth.service';
import { FocusDirective } from './directive/focus.directive';
import { ChangeInputDirective } from './directive/change-input.directive';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { AllocataireComponent } from './components/pages/allocataire/allocataire.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { SharedModule } from './shared/shared.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { AProposComponent } from './components/pages/apropos/apropos.component';
@NgModule({
  declarations: [
    AppComponent,
    AgencesComponent,
    HomeComponent,
    RegisterComponent,
    ChangePasswordComponent,
    EmployeeComponent,
    AllocataireComponent,
    TermsComponent,
    FocusDirective,
    ChangeInputDirective,
    PreloaderComponent,
    AProposComponent
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
