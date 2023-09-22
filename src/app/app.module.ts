import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { SocialComponent } from './components/shared/social/social.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestimonialsComponent } from './components/shared/testimonials/testimonials.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms'; 
import{ReactiveFormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { CoverComponent } from './components/shared/cover/cover.component';
import { RetirementComponent } from './components/Insurences/retirement/retirement.component';
import { InsurenceComponent } from './components/Insurences/insurence/insurence.component';
import { InvestmentComponent } from './components/Insurences/investment/investment.component';

import { TaxComponent } from './components/tax/tax.component';
import { NriservicesComponent } from './components/Insurences/nriservices/nriservices.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { TeamComponent } from './components/team/team.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DropdownComponent } from './components/shared/dropdown/dropdown.component';
import { SubmenuComponent } from './components/shared/submenu/submenu.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';


import { ToastrModule } from 'ngx-toastr';
import { MotorInsurenceComponent } from './components/Insurences/motor-insurence/motor-insurence.component';
import { HomeinsurenceComponent } from './components/Insurences/homeinsurence/homeinsurence.component';
import { TravelinsurenceComponent } from './components/Insurences/travelinsurence/travelinsurence.component';
import { ComercialinsurenceComponent } from './components/Insurences/comercialinsurence/comercialinsurence.component';
import { AgriculturallinsurenceComponent } from './components/Insurences/agriculturallinsurence/agriculturallinsurence.component';
import { MarineinsurenceComponent } from './components/Insurences/marineinsurence/marineinsurence.component';
import { RuralinsurenceComponent } from './components/Insurences/ruralinsurence/ruralinsurence.component';
import { HealthComponent } from './components/Insurences/health/health.component';
import { EducationINSURENCEComponent } from './components/Insurences/education-insurence/education-insurence.component';
import { TerminsurenceComponent } from './components/Insurences/terminsurence/terminsurence.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    SocialComponent,
    ButtonComponent,
  
    TestimonialsComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    CoverComponent,
    RetirementComponent,
    InsurenceComponent,
    InvestmentComponent,

    TaxComponent,
    NriservicesComponent,
    TeamComponent,
    QuotesComponent,
    DropdownComponent,
    SubmenuComponent,
    VideoplayerComponent,
    MotorInsurenceComponent,
    HomeinsurenceComponent,
    TravelinsurenceComponent,
    ComercialinsurenceComponent,
    AgriculturallinsurenceComponent,
    MarineinsurenceComponent,
    RuralinsurenceComponent,
    HealthComponent,
    EducationINSURENCEComponent,
    TerminsurenceComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LightgalleryModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
