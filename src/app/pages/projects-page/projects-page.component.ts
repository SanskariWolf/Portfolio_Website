import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, TopBarComponent, ProjectCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent implements OnInit {
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
}
