import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  email = 'tanushpurwar@gmail.com';
  phone = '+919555263470';
  phoneDisplay = '+91 9555263470';
}
