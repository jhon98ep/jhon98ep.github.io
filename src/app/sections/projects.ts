import { Component, inject, signal } from '@angular/core';
import { I18n } from '../i18n';
import { Reveal } from '../reveal';
import { PROJECTS } from '../content';

@Component({
  imports: [Reveal],
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly i18n = inject(I18n);
  protected readonly projects = PROJECTS;

  /** Which screenshot is showing for each project, keyed by project id. */
  private readonly selected = signal<Record<string, number>>({});

  protected current(id: string): number {
    return this.selected()[id] ?? 0;
  }

  protected show(id: string, index: number): void {
    this.selected.update((s) => ({ ...s, [id]: index }));
  }
}
