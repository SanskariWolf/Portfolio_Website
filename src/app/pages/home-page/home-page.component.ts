import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { PictureCarouselComponent } from "./picture-carousel/picture-carousel.component";
import { SkillCarouselComponent } from "./skill-carousel/skill-carousel.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PictureCarouselComponent, SkillCarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}
