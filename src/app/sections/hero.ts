import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { I18n } from '../i18n';
import { FACTS, PROFILE } from '../content';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-hero',
  imports: [Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnDestroy {
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;
  protected readonly facts = FACTS;

  private readonly now = signal(new Date());
  private readonly timer = setInterval(() => this.now.set(new Date()), 30_000);

  /** Local time in Colombia, so visitors in other time zones know when I'm online. */
  protected readonly localTime = computed(() =>
    new Intl.DateTimeFormat(this.i18n.lang() === 'es' ? 'es-CO' : 'en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'America/Bogota',
    }).format(this.now()),
  );

  /** Headline split in words so each one can rise in with its own delay. */
  protected readonly words = computed(() => this.i18n.t(this.profile.headline).split(' '));

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
