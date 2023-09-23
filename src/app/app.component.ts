import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  isOpen = false;
  showcover: boolean=true;
  

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  constructor(private ngxService:NgxUiLoaderService){}
  
  ngOnInit() {
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 5000);

    this.ngxService.startBackground("do-background-things");

    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01"); 
    
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01");
    }, 8000);
  }
  
   

  
  }

