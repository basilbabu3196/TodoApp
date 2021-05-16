import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import{DataService}from '../services/data.service';
import{FormBuilder,Validators}from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username=""
  name="";
  password = ""
  
  registerForm=this.fb.group({
   username:['',[Validators.required]],
  name:['',[Validators.required]],
  
   password:['',[Validators.required]]
   });
  constructor(private DataService:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
 
    if(this.registerForm.valid){
    this.DataService.register(this.registerForm.value.username, this.registerForm.value.name, this.registerForm.value.password)
      .subscribe((data: any) => {
        if (data) {
          alert(data.message);
          this.router.navigateByUrl("");
        }
      }, (data) => {
        alert(data.error.message);
      })
    }
    else{
      alert("invalid form")
    
    }
  }
  
    }
