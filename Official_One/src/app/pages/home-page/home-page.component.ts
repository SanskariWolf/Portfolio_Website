import { Component } from '@angular/core';
import { PictureCarouselComponent } from "./picture-carousel/picture-carousel.component";
import { SkillCarouselComponent } from "./skill-carousel/skill-carousel.component";

@Component({
  selector: 'app-home-page',
  imports: [PictureCarouselComponent, SkillCarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
