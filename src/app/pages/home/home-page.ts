import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../core/data/site-content';

@Component({
  imports: [RouterLink],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {
  // The template renders this list with Angular's built-in @for block.
  protected readonly services = SERVICES;
}
