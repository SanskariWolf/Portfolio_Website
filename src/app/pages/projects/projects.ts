import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
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
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX design, secure payment integration, and robust backend infrastructure.",
      tags: ["webdev", "database", "uiux"],
      image: "E-Commerce Platform"
    },
    {
      id: 2,
      title: "Crypto Trading Bot",
      description: "Automated cryptocurrency trading bot with machine learning algorithms for market analysis and risk management.",
      tags: ["blockchain", "database"],
      image: "Crypto Trading Bot"
    },
    {
      id: 3,
      title: "Security Audit Tool",
      description: "Comprehensive cybersecurity tool for vulnerability assessment and penetration testing of web applications.",
      tags: ["cybersecurity", "webdev"],
      image: "Security Audit Tool"
    },
    {
      id: 4,
      title: "Container Orchestration",
      description: "Scalable microservices architecture deployed using Docker containers and Kubernetes orchestration.",
      tags: ["docker", "database", "webdev"],
      image: "Container Orchestration"
    },
    {
      id: 5,
      title: "DeFi Smart Contract",
      description: "Decentralized finance protocol with yield farming capabilities and automated market maker functionality.",
      tags: ["blockchain", "cybersecurity"],
      image: "DeFi Smart Contract"
    },
    {
      id: 6,
      title: "Design System Library",
      description: "Comprehensive UI component library with design tokens, accessibility features, and documentation.",
      tags: ["uiux", "webdev"],
      image: "Design System Library"
    },
    {
      id: 7,
      title: "Database Migration Tool",
      description: "Advanced database migration and synchronization tool supporting multiple database engines with rollback capabilities.",
      tags: ["database", "docker"],
      image: "Database Migration Tool"
    },
    {
      id: 8,
      title: "Penetration Testing Framework",
      description: "Automated penetration testing framework with custom vulnerability scanners and reporting dashboard.",
      tags: ["cybersecurity"],
      image: "Penetration Testing Framework"
    }
  ];

  private tagLabels: { [key: string]: string } = {
    'webdev': 'Web Dev',
    'blockchain': 'Blockchain',
    'database': 'Database',
    'docker': 'Docker/K8s',
    'cybersecurity': 'Security',
    'uiux': 'UI/UX'
  };

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleFilter(filter: string): void {
    if (this.activeFilters.has(filter)) {
      this.activeFilters.delete(filter);
    } else {
      this.activeFilters.add(filter);
    }
    // Close dropdown after filter selection
    this.isDropdownOpen = false;
  }

  selectAll(): void {
    this.activeFilters = new Set(['webdev', 'blockchain', 'database', 'docker', 'cybersecurity', 'uiux']);
    this.isDropdownOpen = false;
  }

  deselectAll(): void {
    this.activeFilters.clear();
    this.isDropdownOpen = false;
  }

  shouldShowProject(project: Project): boolean {
    if (this.activeFilters.size === 0) {
      return false; // Hide all projects if no filters are active
    }
    return project.tags.some(tag => this.activeFilters.has(tag));
  }

  getTagLabel(tag: string): string {
    return this.tagLabels[tag] || tag;
  }

  // Close dropdown when clicking outside
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
