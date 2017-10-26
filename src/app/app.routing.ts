import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NgModule } from '@angular/core';
import { PicturesComponent } from './components/pictures/pictures.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StarsComponent } from './components/stars/stars.component';
import { StarDetailComponent } from './components/star-detail/star-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const appRoutes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '/*', component: DashboardComponent },
  { path: 'navbar',  component: NavbarComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'pictures',  component: PicturesComponent },
  { path: 'detail/:id', component: StarDetailComponent },
  { path: 'stars',     component: StarsComponent }
];

// NgModule({
//   imports: [ RouterModule.forRoot(appRoutes) ],
//   exports: [ RouterModule ]
// })
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
