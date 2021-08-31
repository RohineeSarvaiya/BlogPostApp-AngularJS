import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Components/create/create.component';
import { EditComponent } from './Components/edit/edit.component';
import { HomeComponent } from './Components/home/home.component';
import { ShowComponent } from './Components/show/show.component';

const routes: Routes = [
  {path:'' , redirectTo:'/home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'add' , component:CreateComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'show/:id', component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
