import { Component, inject } from '@angular/core';
import { I18n } from '../i18n';
import { PROFILE } from '../content';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
