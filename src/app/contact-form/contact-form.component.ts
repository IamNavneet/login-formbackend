import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  profileForm : FormGroup
err: any;
  constructor(
    private fb: FormBuilder,
    private api : ApiService,
    private router: Router
    ) { 
    this.profileForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  onSubmit(){
    this.api.userLogin(this.username.value, this.password.value).subscribe((response: any)=>{
      console.log(response);

      if(response.success){
        localStorage.setItem('token', response.token);
        this.err = '';
        this.router.navigate(['home']);
      }else{
        this.err = response.error;
      }
    }),
    err=>{

    }
  }


  ngOnInit() {
    

    
  }
  get username() { return this.profileForm.get('userName') }

  get password () { return this.profileForm.get('password') }
}
