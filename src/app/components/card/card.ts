import { Component, input, signal } from '@angular/core';
import { Sparkle } from '../sparkle/sparkle';

@Component({
  selector: 'app-card',
  imports: [Sparkle],
  template: `<article>
    <header>
      <app-sparkle-emoji />
      <strong>{{ name() }}</strong>
    </header>
    <p>
      Counter <span>{{ counter() }}</span>
    </p>
    <p>{{ description() }}</p>
    <button (click)="counter.set(counter() + 1)">Counter++</button>
    <button (click)="onAlert()">Alert</button>
  </article>`,
  styles: `header { display: flex; align-items: center; gap: 10px; }`
})
export class Card {
  counter = signal(0);

  name = input<string>('');
  description = input<string>('');

  onAlert() {
    alert("⚡ Alert ⚡")
  }
}
