import { Component, inject } from '@angular/core';
import { I18n } from '../i18n';
import { CLIENT_WORK } from '../content';

@Component({
  selector: 'app-client-work',
  templateUrl: './client-work.html',
  styleUrl: './client-work.scss',
})
export class ClientWorkSection {
  protected readonly i18n = inject(I18n);
  protected readonly items = CLIENT_WORK;
}
