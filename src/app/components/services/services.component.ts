import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  showHeader: boolean=true;
  services:any=[]
  constructor(private route:Router,private api:ApiService){
  
    route.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url==='/services'  ){
          this.showHeader=false
        }else{
          this.showHeader=true
        }
      }
    })}
    ngOnInit(){
      this.api.getService().subscribe((res)=>{
      this.services=res.services
      console.log(this.services)
      })
    }
}
