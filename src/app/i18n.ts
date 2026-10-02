import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';
export type Txt = Record<Lang, string>;

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class I18n {
  readonly lang = signal<Lang>(this.initialLang());

  t(text: Txt): string {
    return text[this.lang()];
  }

  toggle(): void {
    this.set(this.lang() === 'es' ? 'en' : 'es');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }

  private initialLang(): Lang {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    const lang: Lang = saved === 'es' || saved === 'en'
      ? saved
      : navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
    document.documentElement.lang = lang;
    return lang;
  }
}
