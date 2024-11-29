import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const screenWidth = (event.target as Window).innerWidth;
    if (screenWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false; // Close the menu
    }
  }
}
