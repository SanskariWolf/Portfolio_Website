import { Component, OnInit, OnDestroy, AfterViewInit, PLATFORM_ID, Inject, ElementRef, ViewChild, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-carousel.component.html',
  styleUrl: './skill-carousel.component.css'
})
export class SkillCarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('skillFrame') skillFrame!: ElementRef<HTMLElement>;
  @ViewChild('carouselContainer') carouselContainer!: ElementRef<HTMLElement>;

  private isHovered = false;
  private readonly pixelsPerSecond = 50;
  public animationDuration = '0s';
  private halfwayPoint = 0;
  private isBrowser = false;
  private resizeObserver: ResizeObserver | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // No setup needed here now
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
        this.resizeObserver = new ResizeObserver(entries => {
            this.calculateDimensions();
        });
        if (this.carouselContainer.nativeElement) {
            this.resizeObserver.observe(this.carouselContainer.nativeElement);
        }
        this.calculateDimensions();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.resizeObserver) {
        if (this.carouselContainer.nativeElement) {
           this.resizeObserver.unobserve(this.carouselContainer.nativeElement); 
        }
        this.resizeObserver.disconnect();
    }
  }

  calculateDimensions = () => {
    if (!this.skillFrame || !this.skillFrame.nativeElement.children.length) return;
    
    const element = this.skillFrame.nativeElement;
    const children = element.children;
    const originalItemCount = children.length / 2;
    
    this.halfwayPoint = 0;
    for (let i = 0; i < originalItemCount; i++) {
        const item = children[i] as HTMLElement;
        const style = window.getComputedStyle(item);
        const gap = parseFloat(window.getComputedStyle(element).gap || '0');
        this.halfwayPoint += item.offsetWidth + gap;
    }

    if (this.halfwayPoint > 0 && this.pixelsPerSecond > 0) {
      const duration = this.halfwayPoint / this.pixelsPerSecond;
      this.animationDuration = `${duration}s`;
    } else {
        this.animationDuration = '0s';
    }
    
    this.cdr.detectChanges();
  }

  onMouseEnter() {
    this.isHovered = true;
    if (this.carouselContainer) {
       this.renderer.addClass(this.carouselContainer.nativeElement, 'is-hovered');
    }
  }

  onMouseLeave() {
    this.isHovered = false;
     if (this.carouselContainer) {
       this.renderer.removeClass(this.carouselContainer.nativeElement, 'is-hovered');
    }
  }
}
