import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Add any initialization logic here
    this.initializeAnimations();
  }

  downloadResume(): void {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = './TanushPurwar_Resume.pdf'; // Update path as needed
    link.download = 'TanushPurwar_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private initializeAnimations(): void {
    // Optional: Add intersection observer for scroll-triggered animations
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe elements that should animate on scroll
      const elements = document.querySelectorAll('.resume-button');
      elements.forEach(el => observer.observe(el));
    }
  }


}
