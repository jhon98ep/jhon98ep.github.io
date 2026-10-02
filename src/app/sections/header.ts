import { Component, inject, signal } from '@angular/core';
import { I18n, Txt } from '../i18n';
import { PROFILE } from '../content';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: { '(window:scroll)': 'onScroll()' },
})
export class Header {
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly nav: { id: string; label: Txt }[] = [
    { id: 'proyectos', label: { es: 'Proyectos', en: 'Projects' } },
    { id: 'clientes', label: { es: 'Clientes', en: 'Clients' } },
    { id: 'experiencia', label: { es: 'Experiencia', en: 'Experience' } },
    { id: 'stack', label: { es: 'Stack', en: 'Stack' } },
    { id: 'contacto', label: { es: 'Contacto', en: 'Contact' } },
  ];

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }
}
