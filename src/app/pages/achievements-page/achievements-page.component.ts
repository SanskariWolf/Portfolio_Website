import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-achievements-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements-page.component.html',
  styleUrls: ['./achievements-page.component.css']
})
export class AchievementsPageComponent implements OnInit {
  isMobile: boolean = false;
  currentFilter: 'recent' | 'commented' | 'upvoted' = 'recent';
  badges = [
    { name: 'Top Contributor', icon: 'fas fa-trophy' },
    { name: 'Code Master', icon: 'fas fa-code' },
    { name: 'Bug Hunter', icon: 'fas fa-bug' },
    { name: 'Team Player', icon: 'fas fa-users' },
    { name: 'Innovator', icon: 'fas fa-lightbulb' },
    { name: 'Mentor', icon: 'fas fa-graduation-cap' }
  ];
  achievements = [
    {
      title: 'Hephaestus Guild',
      subtitle: '1st Runner Up at IIIT Nagpur Design-A-Thons',
      image: '../../../assets/thumb-1920-746895.jpg',
      team: 'Vipul, Prtyaksh, Tanush',
      description: 'Lorem Ipsum',
      upvotes: 120,
      comments: 120
    },
    // Add more achievements here
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  private checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  setFilter(filter: 'recent' | 'commented' | 'upvoted') {
    this.currentFilter = filter;
  }
}
