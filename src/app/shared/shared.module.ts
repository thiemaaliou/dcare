import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/layouts/footer/footer.component';
import { BlogsidebarComponent } from '../components/layouts/blogsidebar/blogsidebar.component';
import { BlogdetailsComponent } from '../components/pages/blogdetails/blogdetails.component';
import { HeaderComponent } from '../components/layouts/header/header.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
      FooterComponent,
      BlogsidebarComponent,
      BlogdetailsComponent,
      HeaderComponent,

  ],
  imports: [
      CommonModule,
      RouterModule,
      ToastrModule.forRoot(),
      SweetAlert2Module.forChild(),
    ],
  exports: [
    ToastrModule,
    SweetAlert2Module,
    FooterComponent,
    BlogsidebarComponent,
    BlogdetailsComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
