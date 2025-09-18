import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobileMenuOpen: boolean = false
  scrolled = false;
  activeItem: string = 'home';

  title = 'micro-iniformatics';
   toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
   checkScroll = (): void => {
    this.scrolled = window.scrollY > 20;
  };
}
