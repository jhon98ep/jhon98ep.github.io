import { Component, inject } from '@angular/core';
import { I18n } from '../i18n';
import { FACTS, PROFILE } from '../content';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;
  protected readonly facts = FACTS;
}
