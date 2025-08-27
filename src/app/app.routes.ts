import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Milestones } from './pages/milestones/milestones';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'milestones', component: Milestones },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } // fallback to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
