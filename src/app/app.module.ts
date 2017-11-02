
//General Angular injectors etc
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
//using Stars Dashboard and StarsDetails as links and comps for now
import { StarsComponent } from './components/stars/stars.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StarDetailComponent } from './components/star-detail/star-detail.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Http Routing and Service to uplink and provide 
import { HttpModule }    from '@angular/http';
import { routing } from './app.routing';
import { StarService }         from './services/star.service';
import { ApiService} from './services/api.service';
import { DataService } from './services/data.service';
import { PictureBusService } from './services/picture-bus.service';





@NgModule({
  declarations: [

  AppComponent,
  DashboardComponent,
  StarDetailComponent,
  StarsComponent,
  PicturesComponent,
  NavbarComponent
  ],
  imports: [
  BrowserModule,
  FormsModule, 
  HttpModule, 
  routing,
  ],
  providers: [StarService, ApiService, DataService, PictureBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
