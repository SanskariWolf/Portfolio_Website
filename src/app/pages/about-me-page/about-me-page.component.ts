import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css'
})
export class AboutMePageComponent implements OnInit {
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  downloadCV() {
    // Implement CV download functionality here
    console.log('Downloading CV...');
  }
}
