import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  team:any=[]
  showHeader: boolean=true;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplaySpeed:4000,
    
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    
  }

 
  constructor(private route:Router,private api:ApiService){
   
    route.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url==='/team'  ){
          this.showHeader=false
        }
        else{
          this.showHeader=true
        }
      }
    })}
    ngOnInit(){
      this.api.getTeam().subscribe((res)=>{
     this.team=res.team
     console.log(this.team)
      })
    }
}
