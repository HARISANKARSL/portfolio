import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  allImages:any=[]
constructor (private api:ApiService){}
ngOnInit(){
  this.api.getAllImages().subscribe((res)=>{
    this.allImages=res.gallery
  })
}
}
