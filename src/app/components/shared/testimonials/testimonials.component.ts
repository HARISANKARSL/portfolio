import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  Testimonials: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplaySpeed:2000,
    
    
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
        nav:false
      },
      400: {
        items: 2,
        nav:false
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
        nav:true
        
      }
      
    },
 
  }
}
