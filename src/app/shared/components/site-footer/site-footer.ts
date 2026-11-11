import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_INFO } from '../../../core/data/site-content';

@Component({
  imports: [RouterLink],
  selector: 'app-site-footer',
  styleUrl: './site-footer.scss',
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  // Use the same contact source as the contact page to avoid duplicate details.
  protected readonly contact = CONTACT_INFO;
  // Keep the copyright year current without a manual yearly edit.
  protected readonly currentYear = new Date().getFullYear();
}
