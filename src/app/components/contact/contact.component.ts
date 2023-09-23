import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor( private fb:FormBuilder,private toast:ToastrService){}
  form:FormGroup=this.fb.group({

    from_name: "",
    to_name: "admin",
    from_email: "",
    from_phone: "",
    message: "",
    });
    
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
