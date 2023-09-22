import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {
  showval:string="";
  services: boolean=false
  showcover: boolean=false;
  constructor(private route:Router){
    
 
    
    route.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if( val.url=='/home'  ){
          this.showcover=true
        }else{
          this.showcover=false
        }
      }
    })
   
  }
ngOnInit(){
  if(this.route.url==='/about'){
    this.showval="About"
  }else if(this.route.url==='/life-insurence-planning'){
this.showval="Insurance Planning";
this.services=true
  }else if(this.route.url==='/pension-planning'){
    this.showval="Pension Planning";
    this.services=true
      }
      else if(this.route.url==='/investment-planning'){
        this.showval="Investment Planning";
        this.services=true
          }
          else if(this.route.url==='/marine-insurance'){
            this.showval="Marine Planning";
            this.services=true
              }
              else if(this.route.url==='/rural-and-social-insurance'){
                this.showval="Rural and Social Insurance";
                this.services=true
                  }
             
                  else if(this.route.url==='/nri-services'){
                    this.showval="NRI Services";
                    this.services=true
                      }
                      else if(this.route.url==='/health-insurance'){
                        this.showval="Health Insurence";
                        this.services=true
                          }
                          else if(this.route.url==='/educational-insurance'){
                            this.showval="Education Insurence";
                            this.services=true
                              }
                              else if(this.route.url==='/term-insurance'){
                                this.showval="Term Insurence";
                                this.services=true
                                  }
                                  else if(this.route.url==='/motor-insurance'){
                                    this.showval="Motor Insurence";
                                    this.services=true
                                      }
                                      else if(this.route.url==='/home-insurance'){
                                        this.showval="Home Insurence";
                                        this.services=true
                                          }
                                          else if(this.route.url==='/travel-insurance'){
                                            this.showval="Travel Insurence";
                                            this.services=true
                                              }
                                              else if(this.route.url==='/commercial-insurance'){
                                                this.showval="Commercial Insurence";
                                                this.services=true
                                                  }
                                                  else if(this.route.url==='/agriculture-insurance'){
                                                    this.showval="Agriculture Insurence";
                                                    this.services=true
                                                      }
                      else if(this.route.url==='/gallery'){
                        this.showval=" Gallery";
                      
                          }
                          else if(this.route.url==='/contact-us'){
                            this.showval=" Contact us";
                          
                              }
                              else if(this.route.url==='/services'){
                                this.showval=" Services";
                              
                                  }
                                  else if(this.route.url==='/team'){
                                    this.showval=" Our Team";
                                  
                                      }
                                      else if(this.route.url==='/appoinment'){
                                        this.showval=" Appoinment";
                                      }
                                     
                                         
                  
}
}
