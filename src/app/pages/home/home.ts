import { Component } from '@angular/core';
import { SKILLS, Skill } from '../../data/skills';
import { CommonModule } from '@angular/common';


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

}
