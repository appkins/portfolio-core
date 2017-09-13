import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './app-custom-preloader';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { preload: true }
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true }  // Custom property we will use to track what route to be preloaded
  },
  {
    path: 'web-development',
    loadChildren: './webdev/webdev.module#WebdevModule',
    data: { preload: true }  // Custom property we will use to track what route to be preloaded
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })], // Define Preloading Strategies
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
