import { Component, inject } from '@angular/core';
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
}
