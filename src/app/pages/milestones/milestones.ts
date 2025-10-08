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

  // Sample data with random images
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
      image: "https://picsum.photos/seed/sih2023/300/200"
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
      image: "https://picsum.photos/seed/ethglobal/300/200"
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
      image: "https://picsum.photos/seed/googlechallenge/300/200"
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
      image: "https://picsum.photos/seed/cybersec/300/200"
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
      image: "https://picsum.photos/seed/aws/300/200"
    },
    {
      id: 2,
      name: "Certified Ethical Hacker (CEH)",
      issuingOrganization: "EC-Council",
      issueDate: "January 2023",
      expiryDate: "January 2026",
      certificateId: "CEH-2023-567890",
      tags: ["cybersecurity"],
      image: "https://picsum.photos/seed/ceh/300/200"
    },
    {
      id: 3,
      name: "Google Cloud Professional Cloud Architect",
      issuingOrganization: "Google Cloud",
      issueDate: "February 2023",
      expiryDate: "February 2025",
      certificateId: "GCP-PCA-2023-112233",
      tags: ["cloud", "devops"],
      image: "https://picsum.photos/seed/gcp/300/200"
    },
    {
      id: 4,
      name: "MongoDB Certified Developer",
      issuingOrganization: "MongoDB Inc.",
      issueDate: "December 2022",
      certificateId: "MONGO-DEV-2022-445566",
      tags: ["database", "programming"],
      image: "https://picsum.photos/seed/mongodb/300/200"
    },
    {
      id: 5,
      name: "Project Management Professional (PMP)",
      issuingOrganization: "Project Management Institute",
      issueDate: "November 2022",
      expiryDate: "November 2025",
      certificateId: "PMP-2022-778899",
      tags: ["projectmanagement"],
      image: "https://picsum.photos/seed/pmp/300/200"
    },
    {
      id: 6,
      name: "Adobe Certified Expert - UX Design",
      issuingOrganization: "Adobe Inc.",
      issueDate: "October 2022",
      certificateId: "ADOBE-UX-2022-990011",
      tags: ["design"],
      image: "https://picsum.photos/seed/adobe/300/200"
    }
  ];

  badges: Badge[] = [
    {
      id: 1,
      name: "100 Days of Code",
      tags: ["coding"],
      image: "https://picsum.photos/seed/100days/200/200"
    },
    {
      id: 2,
      name: "Open Source Contributor",
      tags: ["opensource", "contribution"],
      image: "https://picsum.photos/seed/oss/200/200"
    },
    {
      id: 3,
      name: "Hackathon Hero",
      tags: ["hackathon", "coding"],
      image: "https://picsum.photos/seed/hack/200/200"
    },
    {
      id: 4,
      name: "Community Leader",
      tags: ["community", "mentorship"],
      image: "https://picsum.photos/seed/leader/200/200"
    },
    {
      id: 5,
      name: "Code Mentor",
      tags: ["mentorship", "community"],
      image: "https://picsum.photos/seed/mentor/200/200"
    },
    {
      id: 6,
      name: "GitHub Star",
      tags: ["opensource", "contribution"],
      image: "https://picsum.photos/seed/github/200/200"
    },
    {
      id: 7,
      name: "DevPost Winner",
      tags: ["hackathon", "coding"],
      image: "https://picsum.photos/seed/devpost/200/200"
    },
    {
      id: 8,
      name: "Stack Overflow Contributor",
      tags: ["community", "contribution"],
      image: "https://picsum.photos/seed/so/200/200"
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
