import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-site-header',
  styleUrl: './site-header.scss',
  templateUrl: './site-header.html',
})
export class SiteHeader {
  // A signal keeps the mobile navigation state explicit in the template.
  protected readonly menuIsOpen = signal(false);

  protected closeMenu(): void {
    this.menuIsOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuIsOpen.update((isOpen) => !isOpen);
  }
}
