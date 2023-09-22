import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  form:FormGroup=this.fb.group({

from_name: "",
to_name: "admin",
from_email: "",
from_phone: "",
message: "",
});
 
  showHeader: boolean=true;
 
  constructor(private route:Router, private fb:FormBuilder,private toast:ToastrService){
   
    route.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url=='/appoinment'  ){
          this.showHeader=false
        }else{
          this.showHeader=true
        }
      }
    })}
     async sendEmail() {
      emailjs.init('BZuFMaPIg0VzUr_sj')
     let response= await emailjs.send("service_nxibwi7","template_ypse4jk");
      emailjs.send("service_nxibwi7","template_ypse4jk",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      from_phone: this.form.value.from_phone,
      message: this.form.value.message,
      });
      this.toast.success(" We will be in touch with you shortly.","Thanks for contacting us!")
      this.form.reset()
    }
}
