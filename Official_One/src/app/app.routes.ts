import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ContactMePageComponent } from './pages/contact-me-page/contact-me-page.component';
import { AchievementsPageComponent } from './pages/achievements-page/achievements-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

export const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "about-me", component: AboutMePageComponent},
  {path: "blog", component: BlogPageComponent},
  {path: "projects", component: ProjectsPageComponent},
  {path: "achievements", component: AchievementsPageComponent},
  {path: "contact-me", component: ContactMePageComponent},
  {path: "", redirectTo: "home", pathMatch: 'full'}
];

