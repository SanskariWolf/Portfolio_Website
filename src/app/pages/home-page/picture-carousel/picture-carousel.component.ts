import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-picture-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-carousel.component.html',
  styleUrl: './picture-carousel.component.css'
})
export class PictureCarouselComponent implements OnInit, OnDestroy {
  private animationInterval: any;
  private isHovered = false;
  currentIndex = 0;
  private readonly interval = 3000; // 3 seconds

  images = [
    { src: 'assets/hero-section.png', alt: 'Hero Section' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  onMouseEnter() {
    this.isHovered = true;
    this.stopAutoSlide();
  }

  onMouseLeave() {
    this.isHovered = false;
    this.startAutoSlide();
  }

  private startAutoSlide() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.animationInterval = setInterval(() => {
      if (!this.isHovered) {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }, this.interval);
  }

  private stopAutoSlide() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  get currentImage() {
    return this.images[this.currentIndex];
  }
}
