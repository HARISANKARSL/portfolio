import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;



  pauseVideo() {
    this.videoPlayer.nativeElement.load();
  }

 
  
 
}
