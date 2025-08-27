import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

export interface Achievement {
  id: number;
  competition: string;
  organizer: string;
  position: string;
  teamName: string;
  teamMembers: string[];
  tags: string[];
  description: string;
  image: string;
}

export interface Certification {
  id: number;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expiryDate?: string; // Optional for lifetime certifications
  certificateId?: string;
  tags: string[];
  image: string;
}

export interface Badge {
  id: number;
  name: string;
  tags: string[];
  image: string;
}

export interface FilterOption {
  key: string;
  label: string;
}


@Component({
  selector: 'app-milestones',
  imports: [CommonModule],
  templateUrl: './milestones.html',
  styleUrl: './milestones.scss'
})
export class Milestones {
  selectedPanel: 'achievements' | 'certifications' | 'badges' = 'achievements';
  isDropdownOpen = false;
  activeFilters = new Set<string>();

  // Filter options for different sections
  achievementFilterOptions: FilterOption[] = [
    { key: 'webdev', label: 'Web Development' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile App' },
    { key: 'iot', label: 'IoT' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'fintech', label: 'FinTech' },
    { key: 'healthtech', label: 'HealthTech' }
  ];

  certificationFilterOptions: FilterOption[] = [
    { key: 'cloud', label: 'Cloud Computing' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'programming', label: 'Programming' },
    { key: 'database', label: 'Database' },
    { key: 'devops', label: 'DevOps' },
    { key: 'projectmanagement', label: 'Project Management' },
    { key: 'design', label: 'Design' }
  ];

  badgeFilterOptions: FilterOption[] = [
    { key: 'coding', label: 'Coding' },
    { key: 'opensource', label: 'Open Source' },
    { key: 'community', label: 'Community' },
    { key: 'mentorship', label: 'Mentorship' },
    { key: 'hackathon', label: 'Hackathon' },
    { key: 'contribution', label: 'Contribution' }
  ];

  // Sample data
  achievements: Achievement[] = [
    {
      id: 1,
      competition: "Smart India Hackathon 2023",
      organizer: "Government of India",
      position: "Winner",
      teamName: "CodeCrafters",
      teamMembers: ["John Doe", "Jane Smith", "Alex Johnson"],
      tags: ["webdev", "ai", "healthtech"],
      description: "Developed an AI-powered healthcare management system that streamlines patient care and reduces waiting times by 40%. Our solution integrated machine learning algorithms with a user-friendly web interface.",
      image: "https://via.placeholder.com/300x200/ff6b35/ffffff?text=SIH+2023"
    },
    {
      id: 2,
      competition: "Ethereum Global Hackathon",
      organizer: "Ethereum Foundation",
      position: "2nd",
      teamName: "DeFi Innovators",
      teamMembers: ["Sarah Wilson", "Mike Chen", "David Kumar"],
      tags: ["blockchain", "fintech"],
      description: "Created a decentralized lending platform with automated risk assessment and yield optimization. The platform processed over $100K in test transactions during the demo phase.",
      image: "https://via.placeholder.com/300x200/1a659e/ffffff?text=ETH+Global"
    },
    {
      id: 3,
      competition: "Google Solution Challenge",
      organizer: "Google Developer Student Clubs",
      position: "3rd",
      teamName: "Tech for Good",
      teamMembers: ["Lisa Park", "Ahmed Hassan"],
      tags: ["mobile", "ai", "healthtech"],
      description: "Built a mobile app using Flutter and TensorFlow Lite for early detection of plant diseases, helping farmers increase crop yield by 25% through timely intervention.",
      image: "https://via.placeholder.com/300x200/9ab7bd/ffffff?text=Google+Challenge"
    },
    {
      id: 4,
      competition: "CyberSec National Championship",
      organizer: "National Cybersecurity Alliance",
      position: "1st",
      teamName: "SecureNet",
      teamMembers: ["Robert Taylor", "Emma Davis", "Carlos Rodriguez", "Nina Patel"],
      tags: ["cybersecurity", "iot"],
      description: "Developed a comprehensive IoT security framework that identifies and mitigates vulnerabilities in smart home devices. Our solution detected 95% of known attack vectors in testing.",
      image: "https://via.placeholder.com/300x200/004e89/ffffff?text=CyberSec+Champ"
    }
  ];

  certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - Professional",
      issuingOrganization: "Amazon Web Services",
      issueDate: "March 2023",
      expiryDate: "March 2026",
      certificateId: "AWS-SAP-2023-001234",
      tags: ["cloud", "devops"],
      image: "https://via.placeholder.com/150x100/ff6b35/ffffff?text=AWS"
    },
    {
      id: 2,
      name: "Certified Ethical Hacker (CEH)",
      issuingOrganization: "EC-Council",
      issueDate: "January 2023",
      expiryDate: "January 2026",
      certificateId: "CEH-2023-567890",
      tags: ["cybersecurity"],
      image: "https://via.placeholder.com/150x100/1a659e/ffffff?text=CEH"
    },
    {
      id: 3,
      name: "Google Cloud Professional Cloud Architect",
      issuingOrganization: "Google Cloud",
      issueDate: "February 2023",
      expiryDate: "February 2025",
      certificateId: "GCP-PCA-2023-112233",
      tags: ["cloud", "devops"],
      image: "https://via.placeholder.com/150x100/9ab7bd/ffffff?text=GCP"
    },
    {
      id: 4,
      name: "MongoDB Certified Developer",
      issuingOrganization: "MongoDB Inc.",
      issueDate: "December 2022",
      // No expiry date - lifetime certification
      certificateId: "MONGO-DEV-2022-445566",
      tags: ["database", "programming"],
      image: "https://via.placeholder.com/150x100/c8d6cd/ffffff?text=MongoDB"
    },
    {
      id: 5,
      name: "Project Management Professional (PMP)",
      issuingOrganization: "Project Management Institute",
      issueDate: "November 2022",
      expiryDate: "November 2025",
      certificateId: "PMP-2022-778899",
      tags: ["projectmanagement"],
      image: "https://via.placeholder.com/150x100/f7c59f/ffffff?text=PMP"
    },
    {
      id: 6,
      name: "Adobe Certified Expert - UX Design",
      issuingOrganization: "Adobe Inc.",
      issueDate: "October 2022",
      // Lifetime certification
      certificateId: "ADOBE-UX-2022-990011",
      tags: ["design"],
      image: "https://via.placeholder.com/150x100/fb986a/ffffff?text=Adobe"
    }
  ];

  badges: Badge[] = [
    {
      id: 1,
      name: "100 Days of Code",
      tags: ["coding"],
      image: "https://via.placeholder.com/80x80/ff6b35/ffffff?text=100Days"
    },
    {
      id: 2,
      name: "Open Source Contributor",
      tags: ["opensource", "contribution"],
      image: "https://via.placeholder.com/80x80/1a659e/ffffff?text=OSS"
    },
    {
      id: 3,
      name: "Hackathon Hero",
      tags: ["hackathon", "coding"],
      image: "https://via.placeholder.com/80x80/9ab7bd/ffffff?text=Hack"
    },
    {
      id: 4,
      name: "Community Leader",
      tags: ["community", "mentorship"],
      image: "https://via.placeholder.com/80x80/c8d6cd/ffffff?text=Leader"
    },
    {
      id: 5,
      name: "Code Mentor",
      tags: ["mentorship", "community"],
      image: "https://via.placeholder.com/80x80/f7c59f/ffffff?text=Mentor"
    },
    {
      id: 6,
      name: "GitHub Star",
      tags: ["opensource", "contribution"],
      image: "https://via.placeholder.com/80x80/fb986a/ffffff?text=GitHub"
    },
    {
      id: 7,
      name: "DevPost Winner",
      tags: ["hackathon", "coding"],
      image: "https://via.placeholder.com/80x80/7ba2b3/ffffff?text=DevPost"
    },
    {
      id: 8,
      name: "Stack Overflow Contributor",
      tags: ["community", "contribution"],
      image: "https://via.placeholder.com/80x80/f6ddbe/ffffff?text=SO"
    }
  ];

  private tagLabels: { [key: string]: string } = {
    // Achievement tags
    'webdev': 'Web Dev',
    'blockchain': 'Blockchain',
    'ai': 'AI/ML',
    'mobile': 'Mobile',
    'iot': 'IoT',
    'cybersecurity': 'Security',
    'fintech': 'FinTech',
    'healthtech': 'HealthTech',
    // Certification tags
    'cloud': 'Cloud',
    'programming': 'Programming',
    'database': 'Database',
    'devops': 'DevOps',
    'projectmanagement': 'PM',
    'design': 'Design',
    // Badge tags
    'coding': 'Coding',
    'opensource': 'Open Source',
    'community': 'Community',
    'mentorship': 'Mentorship',
    'hackathon': 'Hackathon',
    'contribution': 'Contribution'
  };

  constructor() {
    this.initializeFilters();
  }

  selectPanel(panel: 'achievements' | 'certifications' | 'badges'): void {
    this.selectedPanel = panel;
    this.initializeFilters();
    this.isDropdownOpen = false;
  }

  initializeFilters(): void {
    const options = this.getCurrentFilterOptions();
    this.activeFilters = new Set(options.map(option => option.key));
  }

  getCurrentFilterOptions(): FilterOption[] {
    switch (this.selectedPanel) {
      case 'achievements':
        return this.achievementFilterOptions;
      case 'certifications':
        return this.certificationFilterOptions;
      case 'badges':
        return this.badgeFilterOptions;
      default:
        return [];
    }
  }

  getCurrentSectionName(): string {
    switch (this.selectedPanel) {
      case 'achievements':
        return 'Achievements';
      case 'certifications':
        return 'Certifications';
      case 'badges':
        return 'Badges';
      default:
        return '';
    }
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
  }

  selectAll(): void {
    const options = this.getCurrentFilterOptions();
    this.activeFilters = new Set(options.map(option => option.key));
    this.isDropdownOpen = false;
  }

  deselectAll(): void {
    this.activeFilters.clear();
    this.isDropdownOpen = false;
  }

  shouldShowItem(item: Achievement | Certification | Badge): boolean {
    if (this.activeFilters.size === 0) {
      return false; // Hide all items if no filters are active
    }
    return item.tags.some(tag => this.activeFilters.has(tag));
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
