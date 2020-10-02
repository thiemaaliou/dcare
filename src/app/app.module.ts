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
import { ShopsidebarComponent } from './components/layouts/shopsidebar/shopsidebar.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { Header2Component } from './components/layouts/header2/header2.component';
import { Header3Component } from './components/layouts/header3/header3.component';
import { Header4Component } from './components/layouts/header4/header4.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { Footer2Component } from './components/layouts/footer2/footer2.component';
import { Footer3Component } from './components/layouts/footer3/footer3.component';
import { Footer4Component } from './components/layouts/footer4/footer4.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { AgencesComponent } from './components/pages/agences/agences.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AuthService } from './services/auth.service';
import { FocusDirective } from './directive/focus.directive';
import { ChangeInputDirective } from './directive/change-input.directive';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { AllocataireComponent } from './components/pages/allocataire/allocataire.component';
import { TermsComponent } from './components/pages/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    BlogsidebarComponent,
    ShopsidebarComponent,
    HeaderComponent,
    Header2Component,
    Header3Component,
    Header4Component,
    FooterComponent,
    Footer2Component,
    Footer3Component,
    Footer4Component,
    AboutComponent,
    BlogdetailsComponent,
    BloggridComponent,
    AgencesComponent,
    ContactComponent,
    FaqComponent,
    HomeComponent,
    PricingComponent,
    ServicesComponent,
    ServicedetailComponent,
    RegisterComponent,
    ChangePasswordComponent,
    EmployeeComponent,
    AllocataireComponent,
    TermsComponent,
    FocusDirective,
    ChangeInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwMP4QNMrB3z7ozZAMKOb1sQpk5eKJLFg'
    })
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
