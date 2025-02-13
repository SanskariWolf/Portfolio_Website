import { Component } from '@angular/core';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
  selector: 'app-projects-page',
  imports: [TopBarComponent, ProjectCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {

}
