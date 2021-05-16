import{HttpClient,HttpHeaders}from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from '../../environments/environment'
const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  currentUser: any;
  token: any;
  constructor(private http: HttpClient) {
    this.loadToken();
  }
  


  register(username: any, name: any, password: any) {

    const data = {
          
      username,
      name,
      password
        
    }
    
    return this.http.post(environment.apiUrl + "/register", data)
  }
  getOptions(){
    let headers = new HttpHeaders();
    headers = headers.set('authorization', 'Bearer '+this.token);
    return {
      headers
    }
  }

  loadToken(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
    }
  }

  saveToken(token:any){
    this.token =token;
    localStorage.setItem('token',token);
  }


  login(username: any, password: any) {
    const data = {
      username,
      password
    
    }
    return this.http.post(environment.apiUrl + "/login", data, options)

  }
//,this.getOptions()
  getTodos(){
    return this.http.get(environment.apiUrl+"/getTodos",options);
  }
  getTodo(id:any){
    return this.http.get(environment.apiUrl+"/getTodo/"+id,options);
  }
  editTodo(id:any, data:any){
    return this.http.put(environment.apiUrl + "/editTodo/"+id,data,options);
  }
  addTodo(name:any,description:any){
    const data = {
      name,description
    };
    return this.http.post(environment.apiUrl+ "/addTodo",data,options);
  }
}
