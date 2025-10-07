import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS, Testimonial, SKILLS, Skill } from './assets/testimonials';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  skills: Skill[] = SKILLS;

  // Repeat the list twice for smooth infinite scroll illusion
  get repeatedSkills(): Skill[] {
    return [...this.skills, ...this.skills];
  }

  testimonials: Testimonial[] = TESTIMONIALS;

  get repeatedTestimonials(): Testimonial[] {
    return [...this.testimonials, ...this.testimonials];
  }

}
