import { Routes } from '@angular/router';
import {WelcomeComponent} from "./layout/welcome/welcome.component";

export const routes: Routes = [
  {
    path:'',
    loadComponent:()=>import('./layout/welcome/welcome.component').then(mod => mod.WelcomeComponent)
  },
  {
    path:'content',
    loadComponent:()=>import('./layout/content/content.component').then(mod => mod.ContentComponent )
  },
  {
    path:'print-content',
    loadComponent:()=>import('./layout/print-content/print-content.component').then(mod => mod.PrintContentComponent)
  }


];
