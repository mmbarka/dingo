import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoComponent } from './components/video/video.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsComponent } from './components/news/news.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { ChefsListComponent } from './components/chefs-list/chefs-list.component';
import { ChefComponent } from './components/chef/chef.component';
import { PlatComponent } from './components/plat/plat.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { PlatsAdminComponent } from './components/plats-admin/plats-admin.component';
import { ChefsAdminComponent } from './components/chefs-admin/chefs-admin.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  

import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { PlatInformationComponent } from './components/plat-information/plat-information.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { SearchPlatComponent } from './components/search-plat/search-plat.component';
import { ChefInformationComponent } from './components/chef-information/chef-information.component';
import { SearchChefComponent } from './components/search-chef/search-chef.component';
import { PlatsComponent } from './components/plats/plats.component';
import { PlatChildComponent } from './components/plat-child/plat-child.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { JwPaginationModule } from 'jw-angular-pagination';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    BannerComponent,
    PopularDishesComponent,
    HistoryComponent,
    VideoComponent,
    PopularMenuComponent,
    ChefsComponent,
    ReservationComponent,
    TestimonialsComponent,
    NewsComponent,
    AddAdminComponent,
    SignupComponent,
    ChefsListComponent,
    ChefComponent,
    PlatComponent,
    AddPlatComponent,
    AsterixPipe,
    AdminComponent,
    PlatsAdminComponent,
    ChefsAdminComponent,
    PlatInformationComponent,
    AllUsersComponent,
    AddChefComponent,
    SearchPlatComponent,
    ChefInformationComponent,
    SearchChefComponent,
    PlatsComponent,
    PlatChildComponent,
    MyFilterPipe,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
