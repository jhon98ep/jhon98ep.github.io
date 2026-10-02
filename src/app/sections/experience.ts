import { Component, inject } from '@angular/core';
import { I18n } from '../i18n';
import { JOBS, SKILLS } from '../content';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly i18n = inject(I18n);
  protected readonly jobs = JOBS;
  protected readonly skills = SKILLS;
}
