import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InsurenceComponent } from './components/Insurences/insurence/insurence.component';
import { RetirementComponent } from './components/Insurences/retirement/retirement.component';
import { InvestmentComponent } from './components/Insurences/investment/investment.component';


import { NriservicesComponent } from './components/Insurences/nriservices/nriservices.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { AgriculturallinsurenceComponent } from './components/Insurences/agriculturallinsurence/agriculturallinsurence.component';
import { ComercialinsurenceComponent } from './components/Insurences/comercialinsurence/comercialinsurence.component';
import { HomeinsurenceComponent } from './components/Insurences/homeinsurence/homeinsurence.component';
import { MarineinsurenceComponent } from './components/Insurences/marineinsurence/marineinsurence.component';
import { MotorInsurenceComponent } from './components/Insurences/motor-insurence/motor-insurence.component';
import { RuralinsurenceComponent } from './components/Insurences/ruralinsurence/ruralinsurence.component';
import { TravelinsurenceComponent } from './components/Insurences/travelinsurence/travelinsurence.component';
import { HealthComponent } from './components/Insurences/health/health.component';
import { EducationINSURENCEComponent } from './components/Insurences/education-insurence/education-insurence.component';
import { TerminsurenceComponent } from './components/Insurences/terminsurence/terminsurence.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  
  {
    path:"",redirectTo:'/home',pathMatch:"full"
  },
  {
    path:"life-insurence-planning",component:InsurenceComponent
  },
  {
    path:'pension-planning',component:RetirementComponent
  },
  {
    path:'investment-planning',component:InvestmentComponent
  },
 
  
  {
    path:'nri-services',component:NriservicesComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'contact-us',component:ContactComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'team',component:TeamComponent
  },
  {
    path:'appoinment',component:QuotesComponent
  },
  {
    path:'agriculture-insurance',component:AgriculturallinsurenceComponent
  },
  {
    path:'commercial-insurance',component:ComercialinsurenceComponent
  },
  {
    path:'home-insurance',component:HomeinsurenceComponent
  },
  {
    path:'motor-insurance',component:MotorInsurenceComponent
  },
  {
    path:'rural-and-social-insurance',component:RuralinsurenceComponent
  },
  {
    path:'travel-insurance',component:TravelinsurenceComponent
  },
  {
    path:'health-insurance',component:HealthComponent
  },
  {
    path:'educational-insurance',component:EducationINSURENCEComponent
  },
  {
    path:'term-insurance',component:TerminsurenceComponent
  },
  {
    path:'marine-insurance',component:MarineinsurenceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
