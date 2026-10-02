import { Directive, ElementRef, OnDestroy, OnInit, inject, input, numberAttribute } from '@angular/core';

/** Fades an element in the first time it scrolls into view. `appReveal="120"` delays it 120 ms. */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal', '[style.--delay]': "appReveal() + 'ms'" },
})
export class Reveal implements OnInit, OnDestroy {
  readonly appReveal = input(0, { transform: numberAttribute });

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node: HTMLElement = this.el.nativeElement;
    if (!('IntersectionObserver' in window)) {
      node.classList.add('in');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('in');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
