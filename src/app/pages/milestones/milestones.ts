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
    { key: 'uiux', label: 'UI/UX' },
  ];

  certificationFilterOptions: FilterOption[] = [
    { key: 'webdev', label: 'Web Development' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile App' },
    { key: 'iot', label: 'IoT' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'uiux', label: 'UI/UX' },
  ];

  badgeFilterOptions: FilterOption[] = [
    { key: 'webdev', label: 'Web Development' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile App' },
    { key: 'iot', label: 'IoT' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'uiux', label: 'UI/UX' },
    { key: 'languages', label: 'Languages' },
  ];

  // Sample data with random images
  achievements: Achievement[] = [
    {
      id: 4,
      competition: "GooseCTF",
      organizer: "Warwick Cyber Security Society ",
      position: "3rd",
      teamName: "Obsidian Howlers",
      teamMembers: ["Pratham Gupta", "Tanush Purwar", "Tanush Purwar"],
      tags: ["cybersecurity"],
      description: "",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFgaTaP7OljZg/feedshare-shrink_800/B56ZbV_hHAHUAk-/0/1747346921127?e=1762992000&v=beta&t=3HWGIlQel0-5XnmTeGo0h7pbouRw4dz9sNOYTCuZgAw"
    },
    {
      id: 3,
      competition: "Regional Hack - Delhi, India",
      organizer: "EduChain x HackQuest",
      position: "3rd",
      teamName: "Pump & Dump",
      teamMembers: ["Manan Wadhwa", "Angh Mighlani", "Tanush Purwar"],
      tags: ["webdev", "ai", "blockchain"],
      description: "SmartGuard - AI-based Fuzzer for Smart Contracts. The fuzzing policy, which is used to generate transactions, is represented by an ensemble of neural networks and is learned from thousands of high-quality sequences of transactions generated using symbolic execution.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEvI7QOOQ4wyw/feedshare-shrink_800/B56ZYl2evLHQAg-/0/1744391794412?e=1762992000&v=beta&t=x08LF6gsYCw4a-W0cbZ1HwTEP2vV8J78WO5NRancliQ"
    },
    {
      id: 2,
      competition: "Designathon'24-25",
      organizer: "Strokes | The IIITN Design Club",
      position: "2nd",
      teamName: "The Hephaetus Guild",
      teamMembers: ["Vipul Kohli", "Pratyaksh Agarwal", "Tanush Purwar"],
      tags: ["uiux"],
      description: "Created a comprehensive space for individuals to connect together to achieve emotion liberation. MindLamp is open space for the individuals to express their vulnerabilities and find catharsis.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEd_mDsefGwSg/feedshare-shrink_1280/B56ZRhR3pMHwAk-/0/1736798891144?e=1762992000&v=beta&t=d0SFl-YcABUTWtXEGCyBdBiWJk8ciAlRjvPgdAAm1QU"
    },
    {
      id: 1,
      competition: "HackMait 3.0",
      organizer: "IOSD-MAIT at Impulse'24",
      position: "2nd",
      teamName: "K-OS",
      teamMembers: ["Arnav Chopra", "Tanush Purwar", "Shvivam Kumar Jha"],
      tags: ["blockchain", "iot"],
      description: "Blockchain based system for the voting process of India. This project was aimed towards the security and stability of the voting process.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFGzCDhTdjnGA/feedshare-shrink_800/feedshare-shrink_800/0/1720455670112?e=1762992000&v=beta&t=N1tUYIJGakx56tgpUg4mw4YPfaRYLhgbVVacowu1n6E"
    }
  ];

  certifications: Certification[] = [
    {
      id: 6,
      name: "AWS Certified Solutions Architect - Professional",
      issuingOrganization: "Amazon Web Services",
      issueDate: "March 2023",
      expiryDate: "March 2026",
      certificateId: "AWS-SAP-2023-001234",
      tags: ["cloud", "devops"],
      image: "https://picsum.photos/seed/aws/300/200"
    },
    {
      id: 5,
      name: "Certified Ethical Hacker (CEH)",
      issuingOrganization: "EC-Council",
      issueDate: "January 2023",
      expiryDate: "January 2026",
      certificateId: "CEH-2023-567890",
      tags: ["cybersecurity"],
      image: "https://picsum.photos/seed/ceh/300/200"
    },
    {
      id: 4,
      name: "Google Cloud Professional Cloud Architect",
      issuingOrganization: "Google Cloud",
      issueDate: "February 2023",
      expiryDate: "February 2025",
      certificateId: "GCP-PCA-2023-112233",
      tags: ["cloud", "devops"],
      image: "https://picsum.photos/seed/gcp/300/200"
    },
    {
      id: 3,
      name: "MongoDB Certified Developer",
      issuingOrganization: "MongoDB Inc.",
      issueDate: "December 2022",
      certificateId: "MONGO-DEV-2022-445566",
      tags: ["database", "programming"],
      image: "https://picsum.photos/seed/mongodb/300/200"
    },
    {
      id: 2,
      name: "Project Management Professional (PMP)",
      issuingOrganization: "Project Management Institute",
      issueDate: "November 2022",
      expiryDate: "November 2025",
      certificateId: "PMP-2022-778899",
      tags: ["projectmanagement"],
      image: "https://picsum.photos/seed/pmp/300/200"
    },
    {
      id: 1,
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
      id: 8,
      name: "Introduction to Cybersecurity",
      tags: ["cybersecurity"],
      image: "https://images.credly.com/size/110x110/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png"
    },
    {
      id: 7,
      name: "Junior Cybersecurity Analyst Career Path",
      tags: ["cybersecurity"],
      image: "https://images.credly.com/size/110x110/images/441578ec-c0f3-46cc-95fc-86b27e90cf4f/image.png"
    },
    {
      id: 6,
      name: "Python for Data Science",
      tags: ["languages"],
      image: "https://images.credly.com/size/110x110/images/b40db465-587f-45eb-a854-af8630a630e7/blob"
    },
    {
      id: 5,
      name: "ISC2 Candidate",
      tags: ["cybersecurity"],
      image: "https://images.credly.com/size/110x110/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png"
    },
    {
      id: 4,
      name: "D-CTF Quals 2025 - Participants",
      tags: ["cybersecurity"],
      image: "https://api.cyber-edu.co/images/badges/H6u48GhM0eROhOzE.jpeg"
    },
    {
      id: 3,
      name: "GitHub Star",
      tags: ["opensource", "contribution"],
      image: "https://picsum.photos/seed/github/200/200"
    },
    {
      id: 2,
      name: "DevPost Winner",
      tags: ["hackathon", "coding"],
      image: "https://picsum.photos/seed/devpost/200/200"
    },
    {
      id: 1,
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
