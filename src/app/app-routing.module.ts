import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChefsListComponent } from './components/chefs-list/chefs-list.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlatInformationComponent } from './components/plat-information/plat-information.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { SearchPlatComponent } from './components/search-plat/search-plat.component';
import { ChefInformationComponent } from './components/chef-information/chef-information.component';
import { SearchChefComponent } from './components/search-chef/search-chef.component';
import { PlatsComponent } from './components/plats/plats.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'addAdmin', component:AddAdminComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'chefs', component:ChefsListComponent},
  {path: 'addPlat', component:AddPlatComponent},
  {path: 'editPlat/:id', component:AddPlatComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'platInformation/:id', component:PlatInformationComponent},
  {path: 'addChef', component:AddChefComponent},
  {path: 'searchPlat' , component:SearchPlatComponent},
  {path: 'chefInformation/:id', component:ChefInformationComponent},
  {path: 'editChef/:id', component:AddChefComponent},
  {path: 'searchChef', component:SearchChefComponent},
  {path: 'plats', component:PlatsComponent},
  {path: 'signupAdmin', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
