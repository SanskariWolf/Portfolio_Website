import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string; // New property for the redirect link
}

export interface FilterOption {
  key: string;
  label: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  isDropdownOpen = false;
  activeFilters = new Set<string>(['webdev', 'blockchain', 'database', 'docker', 'cybersecurity', 'uiux']);

  filterOptions: FilterOption[] = [
    { key: 'webdev', label: 'Web Development' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'database', label: 'Database' },
    { key: 'docker', label: 'Docker/Kubernetes' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'uiux', label: 'UI/UX' }
  ];

  projects: Project[] = [
    {
      id: 2,
      title: "Smart Guard",
      description: "A personal portfolio website showcasing my projects and skills.",
      tags: ["blockchain", "docker"],
      image: "https://raw.githubusercontent.com/SanskariWolf/SmartGuard/refs/heads/alpha/assets/Logo.webp",
      link: "https://github.com/SanskariWolf/SmartGuard" // Replace with your project link
    },
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      tags: ["webdev", "uiux"],
      image: "./logo.svg",
      link: "https://github.com/SanskariWolf/Portfolio_Website" // Replace with your project link
    }
  ];

  filteredProjects: Project[] = [];

  private tagLabels: { [key: string]: string } = {
    'webdev': 'Web Dev',
    'blockchain': 'Blockchain',
    'database': 'Database',
    'docker': 'Docker/K8s',
    'cybersecurity': 'Security',
    'uiux': 'UI/UX'
  };

  constructor() {
    this.updateFilteredProjects();
  }

  updateFilteredProjects(): void {
    if (this.activeFilters.size === 0) {
      this.filteredProjects = [];
      return;
    }
    this.filteredProjects = this.projects.filter(project =>
      project.tags.some(tag => this.activeFilters.has(tag))
    );
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleFilter(filter: string): void {
    if (this.activeFilters.has(filter)) {
      this.activeFilters.delete(filter);
    } else {
      this.activeFilters.add(filter);
    }
    this.isDropdownOpen = false;
    this.updateFilteredProjects();
  }

  selectAll(): void {
    this.filterOptions.forEach(option => this.activeFilters.add(option.key));
    this.isDropdownOpen = false;
    this.updateFilteredProjects();
  }

  deselectAll(): void {
    this.activeFilters.clear();
    this.isDropdownOpen = false;
    this.updateFilteredProjects();
  }

  getTagLabel(tag: string): string {
    return this.tagLabels[tag] || tag;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.filter-dropdown');
    const filterIcon = target.closest('.filter-icon');

    if (!dropdown && !filterIcon) {
      this.isDropdownOpen = false;
    }
  }
}
