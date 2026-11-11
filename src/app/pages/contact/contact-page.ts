import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT_INFO, OPENING_HOURS } from '../../core/data/site-content';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact-page',
  styleUrl: './contact-page.scss',
  templateUrl: './contact-page.html',
})
export class ContactPage {
  private readonly formBuilder = new FormBuilder().nonNullable;

  protected readonly contact = CONTACT_INFO;
  protected readonly openingHours = OPENING_HOURS;
  protected readonly submissionNotice = signal<string | null>(null);
  protected readonly contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    registrationNumber: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected sendMessage(): void {
    this.submissionNotice.set(null);

    // Show every required field before returning so the customer can fix the form in one pass.
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const values = this.contactForm.getRawValue();
    const subject = encodeURIComponent(`Serviceförfrågan från ${values.name}`);
    const body = encodeURIComponent(
      [
        `Namn: ${values.name}`,
        `E-post: ${values.email}`,
        `Telefon: ${values.phone || 'Inte angivet'}`,
        `Registreringsnummer: ${values.registrationNumber || 'Inte angivet'}`,
        '',
        values.message,
      ].join('\n'),
    );

    // Open an email draft until TCH connects a server-side form endpoint.
    this.submissionNotice.set('Ditt mejlprogram öppnas med uppgifterna ifyllda.');
    window.location.href = `mailto:${this.contact.email}?subject=${subject}&body=${body}`;
  }
}
