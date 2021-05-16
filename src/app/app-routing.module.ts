import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent}from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TodoComponent } from './todo/todo.component';
import { AddComponent } from './add/add.component'
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
 
  {
    path:'', component:LoginComponent
    },
     
  {
    path:'registration',component:RegistrationComponent
  },
  
  {
    path:'tudo',component:TodoComponent
    },

    {
    path:'add', component: AddComponent
  },{
    path:'edit/:id', component: EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
