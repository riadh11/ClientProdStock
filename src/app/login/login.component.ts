import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm : FormGroup;
 credentials = {
                username:'',
                password:'' 
               };
  constructor(private fb:FormBuilder,
              private appservice:AppService,
              private router:Router ) { }

  ngOnInit() {
    this.loginForm=this.fb.group(
      {
        username : ['',Validators.required],
        password : ['',Validators.required]
      }
    );
  }
  login(){
     console.log('test',this.loginForm.value);
    this.credentials =this.loginForm.value; 
    //console.log('test',this.credentials);
   this.appservice.authentication(this.credentials , ()=>{
       this.router.navigateByUrl('/home');
  })

    }
     
      
  
}

  

