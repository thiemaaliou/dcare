import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

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
import { BlogstandardComponent } from './components/pages/blogstandard/blogstandard.component';
import { CasedetailsComponent } from './components/pages/casedetails/casedetails.component';
import { CasestudyComponent } from './components/pages/casestudy/casestudy.component';
import { ComingsoomComponent } from './components/pages/comingsoom/comingsoom.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { HomeComponent } from './components/pages/home/home.component';
import { Home2Component } from './components/pages/home2/home2.component';
import { Home3Component } from './components/pages/home3/home3.component';
import { Home4Component } from './components/pages/home4/home4.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopdetailComponent } from './components/pages/shopdetail/shopdetail.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamdetailComponent } from './components/pages/teamdetail/teamdetail.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AuthService } from './services/auth.service';
import { FocusDirective } from './directive/focus.directive';
import { ChangeInputDirective } from './directive/change-input.directive';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { AllocataireComponent } from './components/pages/allocataire/allocataire.component';

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
    BlogstandardComponent,
    CasedetailsComponent,
    CasestudyComponent,
    ComingsoomComponent,
    ContactComponent,
    ErrorComponent,
    FaqComponent,
    HomeComponent,
    Home2Component,
    Home3Component,
    Home4Component,
    PricingComponent,
    ServicesComponent,
    ServicedetailComponent,
    ShopComponent,
    ShopdetailComponent,
    TeamComponent,
    TeamdetailComponent,
    RegisterComponent,
    ChangePasswordComponent,
    EmployeeComponent,
    AllocataireComponent,
    FocusDirective,
    ChangeInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBA4DCiUPSZCiyvOoVAVeA2WzY7EihCNgc'
    })
  ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
