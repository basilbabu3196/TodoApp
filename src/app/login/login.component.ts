import { Component, OnInit } from '@angular/core';
import{Router,Routes}from '@angular/router';
import "bootstrap/dist/css/bootstrap.css"
import { FormBuilder, Validators } from '@angular/forms';
import{DataService}from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="Enter your email/phone";
  password = "Enter your password";
  loginForm=this.fb.group({
 
    username:[''],
    password:['']
    });
  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getUsername(event:any){
    this.username=event.target.value;
    console.log(this.username);
    
  }
  pswChange(event:any){
    this.password=event.target.value;
    console.log(this.password);
    
  }
  login()
{
  if(this.loginForm.valid)
  {
   let username = this.loginForm.value.username;
   
   
      let passwo = this.loginForm.value.password;
      
      
      this.dataService.login(username,passwo)
        .subscribe((data: any) => {
          this.dataService.saveToken(data.token);
   if(data)
   {
     alert(data.message);
     localStorage.setItem("name",data.name)
    localStorage.setItem("user",data.username)
     this.router.navigateByUrl("tudo");
   }
 },(data)=>{alert(data.error.message);
 })

}
  
  else{
    alert("invalid form")
  }
}
}
