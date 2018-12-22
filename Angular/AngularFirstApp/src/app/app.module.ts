import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserListService } from './user-list.service';
import { Http, HttpModule } from '@angular/http';

const appRoute:Routes = [
  {path:'',component:AppComponent},
  {path:'about',component:AboutComponent},
  {path:'users',component:UsersListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DisplayComponent,
    AboutComponent,
    MainComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  
  providers: [UserListService],//providing services, mention our services
  // bootstrap: [AppComponent,NavBarComponent, MainComponent]
  bootstrap: [NavBarComponent, MainComponent]//for viewing
})
export class AppModule { }
