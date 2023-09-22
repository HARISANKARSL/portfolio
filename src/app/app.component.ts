import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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

  
   

  
  }

