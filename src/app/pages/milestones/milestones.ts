import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

export interface TeamMember {
  name: string;
  linkedin: string;
}

export interface ProjectDetails {
  projectName?: string;
  projectUrl?: string;
}

export interface Achievement {
  id: number;
  competition: string;
  organizer: string;
  position: string;
  teamName: string;
  teamMembers: TeamMember[];
  tags: string[];
  description: string;
  image: string;
  projectDetails?: ProjectDetails[];
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
    { key: 'uiux', label: 'UI/UX' }
  ];

  certificationFilterOptions: FilterOption[] = [
    { key: 'webdev', label: 'Web Development' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile App' },
    { key: 'iot', label: 'IoT' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'uiux', label: 'UI/UX' },
    { key: 'languages', label: 'Languages' }
  ];

  badgeFilterOptions: FilterOption[] = [
    { key: 'webdev', label: 'Web Development' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile App' },
    { key: 'iot', label: 'IoT' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'uiux', label: 'UI/UX' },
    { key: 'languages', label: 'Languages' }
  ];

  // Sample data
  achievements: Achievement[] = [
    {
      id: 7,
      competition: 'Google CTF 2025',
      organizer: 'Google',
      position: '97 (Top 100)',
      teamName: 'Obsidian Howlers',
      teamMembers: [
        { name: 'Tanush Purwar', linkedin: 'https://www.linkedin.com/in/tanushpurwar/' }
      ],
      tags: ['cybersecurity'],
      description: '',
      image:
        './achievements/GoogleCTF2025.png',

    },
    {
      id: 6,
      competition: 'BH USA CTF 2025',
      organizer: 'Black Hat USA & Bugcrowd',
      position: 'Top 100',
      teamName: 'Obsidian Howlers',
      teamMembers: [
        { name: 'Tanush Purwar', linkedin: 'https://www.linkedin.com/in/tanushpurwar/' }
      ],
      tags: ['cybersecurity'],
      description: '',
      image:
        './achievements/BHUSA2025.webp',

    },
    {
      id: 5,
      competition: 'Blockathon',
      organizer: 'Cognizance 2025 - IIT Roorkee',
      position: '1st',
      teamName: 'Jack of Jokers',
      teamMembers: [
        { name: 'Divyanshh Kalra', linkedin: 'https://www.linkedin.com/in/divyanshh-kalra/' },
        { name: 'Vipul Kohli', linkedin: 'https://www.linkedin.com/in/vipul-kohli-31bb3921b/' },
        { name: 'Tanush Purwar', linkedin: 'https://www.linkedin.com/in/tanushpurwar/' },
        { name: 'Piyush Mittal', linkedin: 'https://www.linkedin.com/in/piyush-mittal-hi/' },

      ],
      tags: ['blockchain', 'webdev'],
      description: '',
      image:
        './achievements/BlockathonCognizance2025IITRoorkie.png',
    },
    {
      id: 4,
      competition: 'GooseCTF 2025',
      organizer: 'Warwick Cyber Security Society',
      position: '3rd',
      teamName: 'Obsidian Howlers',
      teamMembers: [
        { name: 'Pratham Gupta', linkedin: 'https://www.linkedin.com/in/prathamgupta006/' },
        { name: 'Tanush Purwar', linkedin: 'https://www.linkedin.com/in/tanushpurwar/' },
      ],
      tags: ['cybersecurity'],
      description: '',
      image:
        './achievements/GooseCTF25WarwickCyberSecuritySociety.jpg',

    },
    {
      id: 3,
      competition: 'Regional Hack - Delhi, India',
      organizer: 'EduChain x HackQuest',
      position: '3rd',
      teamName: 'Pump & Dump',
      teamMembers: [
        { name: 'Manan Wadhwa', linkedin: 'https://www.linkedin.com/in/manan-wadhwa/' },
        { name: 'Anagh Mighlani', linkedin: 'https://www.linkedin.com/in/anagh-miglani/' },
        { name: 'Tanush Purwar', linkedin: 'https://www.linkedin.com/in/tanushpurwar/' }
      ],
      tags: ['webdev', 'ai', 'blockchain'],
      description:
        'SmartGuard - AI-based Fuzzer for Smart Contracts. The fuzzing policy, which is used to generate transactions, is represented by an ensemble of neural networks and is learned from thousands of high-quality sequences of transactions generated using symbolic execution.',
      image:
        './achievements/RegionalHack2025EduchainXHackQuest.jpg',
      projectDetails:[
      {projectName: 'SmartGuard',
      projectUrl: 'https://github.com/SanskariWolf/SmartGuard'}]
    },
    {
      id: 2,
      competition: "Designathon'24",
      organizer: 'Strokes | The IIITN Design Club',
      position: '2nd',
      teamName: 'The Hephaetus Guild',
      teamMembers: [
        { name: 'Vipul Kohli', linkedin: 'https://www.linkedin.com/in/vipul-kohli-31bb3921b/' },
        { name: 'Pratyaksh Agarwal', linkedin: 'https://www.linkedin.com/in/agarwal-pratyaksh/' },
        { name: 'Tanush Purwar', linkedin: 'https://www.linkedin.com/in/tanushpurwar/' }
      ],
      tags: ['uiux'],
      description:
        'Created a comprehensive space for individuals to connect together to achieve emotion liberation. MindLamp is open space for the individuals to express their vulnerabilities and find catharsis.',
      image:
        './achievements/Designathon2024StrokesIIITN.jpg',
      projectDetails: [{projectName: 'MindLamp',
      projectUrl: 'https://github.com/SanskariWolf/Mind-Lamp'},{projectName: 'TruthIn',
      projectUrl: 'https://github.com/SanskariWolf/TruthIn-Lamp'}]
    },
    {
      id: 1,
      competition: 'HackMait 3.0',
      organizer: "IOSD-MAIT at Impulse'24",
      position: '2nd',
      teamName: 'K-OS',
      teamMembers: [
        { name: 'Arnav Chopra', linkedin: 'https://www.linkedin.com/in/arnav-chopra-72353a2a2/' },
        { name: 'Tanush Purwar', linkedin: 'https://www.linkedin.com/in/tanushpurwar/' },
        { name: 'Shivam Kumar Jha', linkedin: 'https://www.linkedin.com/in/shivam-kumar-jha-35686a238/' }
      ],
      tags: ['blockchain', 'iot'],
      description:
        'Blockchain based system for the voting process of India. This project was aimed towards the security and stability of the voting process.',
      image:
        './achievements/HackMait3Impulse2024IOSDMAIT.jpg',
      projectDetails: [{projectName: 'Blockchain Voting System',
      projectUrl: 'https://github.com/your-username/blockchain-voting'}]
    }
  ];

  certifications: Certification[] = [
    {
      id: 11,
      name: 'Junior Cybersecurity Analyst Career Path',
      issuingOrganization: 'Cisco Networking Academy',
      issueDate: 'September 2025',
      certificateId: 'e2a6fe89-b51c-4a14-8500-904c19caa202',
      tags: ['cybersecurity'],
      image: 'https://media.licdn.com/dms/image/v2/D562DAQFoyfvQ-MknWg/profile-treasury-document-cover-images_800/B56ZlQ4V63JoBA-/0/1757998586212?e=1761004800&v=beta&t=GvJzfkrWNXILz4s8iMv93Wja2YXsaOQgg7Kgt1qTj5U'
    },
    {
      id: 10,
      name: 'Foundations of Cybersecurity',
      issuingOrganization: 'Google',
      issueDate: 'August 2025',
      certificateId: '7U0EFBRLRAFM',
      tags: ['cybersecurity'],
      image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7U0EFBRLRAFM/CERTIFICATE_LANDING_PAGE~7U0EFBRLRAFM.jpeg'
    },
    {
      id: 9,
      name: 'Introduction to Cybersecurity',
      issuingOrganization: 'Cisco Networking Academy',
      issueDate: 'August 2025',
      certificateId: 'f461938e-8389-4e4c-8be8-90ed1f902654',
      tags: ['cybersecurity'],
      image: 'https://media.licdn.com/dms/image/v2/D562DAQEcn5zgQlbiGQ/profile-treasury-document-cover-images_800/B56ZjBuHGpG4BE-/0/1755596755624?e=1761004800&v=beta&t=zv1aK1IksUOcnJlaA7yo6RAkoRbEqMHJ8dC_r5j7DwY'
    },
    {
      id: 8,
      name: 'OSForensics Triage Certification (OSFTC)',
      issuingOrganization: 'PassMark Software Pty Ltd',
      issueDate: 'August 2025',
      expiryDate: 'August 2027',
      certificateId: '142920-5',
      tags: ['cybersecurity'],
      image: 'https://media.licdn.com/dms/image/v2/D562DAQF6FixROgYAYA/profile-treasury-document-cover-images_800/B56ZhxQRmRHUBE-/0/1754246752242?e=1761004800&v=beta&t=_AbNC2wwCm_-6VDP9Z8_17ZZKSx3e0pYUJN466UEG2o'
    },
    {
      id: 7,
      name: 'Cybersecurity Foundations: Protecting the Digital Frontier',
      issuingOrganization: 'Oeson Learning',
      issueDate: 'July 2025',
      tags: ['cybersecurity'],
      image: 'https://media.licdn.com/dms/image/v2/D562DAQEdp9mlJUJm5g/profile-treasury-document-cover-images_800/B56Zh0EoZGHUA8-/0/1754294031022?e=1761004800&v=beta&t=KL-6RgImU3VMOSY0nNpAT75yGl1SKqezkZLFVThsAys'
    },
    {
      id: 6,
      name: 'Angular',
      issuingOrganization: 'Internshala Trainings',
      issueDate: 'July 2024',
      certificateId: '9lzi0oq2gxy',
      tags: ['uiux','webdev'],
      image: 'https://training-uploads.internshala.com/certificates/COC-9lzi0oq2gxy.jpg'
    },
    {
      id: 5,
      name: 'Colour Theory for Designers',
      issuingOrganization: 'Internshala Trainings',
      issueDate: 'March 2024',
      certificateId: 'drk32gmvi1e',
      tags: ['uiux','webdev'],
      image: 'https://training-uploads.internshala.com/certificates/COC-drk32gmvi1e.jpg'
    },
    {
      id: 4,
      name: 'UI/UX Design with AI',
      issuingOrganization: 'Internshala Trainings',
      issueDate: 'November 2023',
      certificateId: 'a1v9e0frsnf',
      tags: ['uiux'],
      image: 'https://training-uploads.internshala.com/certificates/COC-a1v9e0frsnf.jpg'
    },
    {
      id: 3,
      name: 'Python 101 for Data Science',
      issuingOrganization: 'Cognitive Class',
      issueDate: 'August 2023',
      certificateId: 'fe0ad67fb69d4215803f853bb36febcd',
      tags: ['languages'],
      image: './IBM PY0101EN Certificate _ Cognitive Class_page-0001.jpg'
    },
    {
      id: 2,
      name: 'Linux Command Line',
      issuingOrganization: 'Peter A - Udemy',
      issueDate: 'March 2023',
      certificateId: 'UC-71c13fec-4f07-47c3-8a37-d02e57ce6bda',
      tags: ['cybersecurity'],
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-71c13fec-4f07-47c3-8a37-d02e57ce6bda.jpg'
    },
    {
      id: 1,
      name: 'CSS And Javascript Crash Course',
      issuingOrganization: 'Proper Dot Institute - Udemy',
      issueDate: 'February 2023',
      certificateId: 'UC-a993c63e-3f4e-4e14-82f1-3651aa53de37',
      tags: ['uiux', 'webdev'],
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a993c63e-3f4e-4e14-82f1-3651aa53de37.jpg'
    }
  ];

  badges: Badge[] = [
    {
      id: 10,
      name: 'OSMOSIS Association Spooky CTF 2025',
      tags: ['cybersecurity'],
      image: './badges/SpookyCTF2025.png'
    },
    {
      id: 9,
      name: 'DEADFACE CTF 2025 Competitor',
      tags: ['cybersecurity'],
      image: './badges/DEADFACECTF2025.png'
    },
    {
      id: 8,
      name: 'Introduction to Cybersecurity',
      tags: ['cybersecurity'],
      image: 'https://images.credly.com/size/110x110/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png'
    },
    {
      id: 7,
      name: 'Junior Cybersecurity Analyst Career Path',
      tags: ['cybersecurity'],
      image: 'https://images.credly.com/size/110x110/images/441578ec-c0f3-46cc-95fc-86b27e90cf4f/image.png'
    },
    {
      id: 6,
      name: 'Python for Data Science',
      tags: ['languages'],
      image: 'https://images.credly.com/size/110x110/images/b40db465-587f-45eb-a854-af8630a630e7/blob'
    },
    {
      id: 5,
      name: 'ISC2 Candidate',
      tags: ['cybersecurity'],
      image: 'https://images.credly.com/size/110x110/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png'
    },
    {
      id: 4,
      name: 'D-CTF Quals 2025 - Participants',
      tags: ['cybersecurity'],
      image: 'https://api.cyber-edu.co/images/badges/H6u48GhM0eROhOzE.jpeg'
    },
    {
      id: 3,
      name: 'GitHub Star',
      tags: ['opensource', 'contribution'],
      image: 'https://picsum.photos/seed/github/200/200'
    },
    {
      id: 2,
      name: 'DevPost Winner',
      tags: ['hackathon', 'coding'],
      image: 'https://picsum.photos/seed/devpost/200/200'
    },
    {
      id: 1,
      name: 'Stack Overflow Contributor',
      tags: ['community', 'contribution'],
      image: 'https://picsum.photos/seed/so/200/200'
    }
  ];

  private tagLabels: { [key: string]: string } = {
    // Achievement tags
    webdev: 'Web Dev',
    blockchain: 'Blockchain',
    ai: 'AI/ML',
    mobile: 'Mobile',
    iot: 'IoT',
    cybersecurity: 'Security',
    fintech: 'FinTech',
    healthtech: 'HealthTech',
    // Certification tags
    cloud: 'Cloud',
    programming: 'Programming',
    database: 'Database',
    devops: 'DevOps',
    projectmanagement: 'PM',
    design: 'Design',
    // Badge tags
    coding: 'Coding',
    opensource: 'Open Source',
    community: 'Community',
    mentorship: 'Mentorship',
    hackathon: 'Hackathon',
    contribution: 'Contribution'
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
