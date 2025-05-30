import {
  Component,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChild,
  PLATFORM_ID,
  inject,
  OnDestroy,
  viewChild,
  DestroyRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sparkle-emoji',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sparkle-wrapper">
      <div #sparkle class="sparkle">✨</div>
    </div>
  `,
  styles: [
    /* same styles */
  ],
})
export class Sparkle implements AfterViewInit {
  sparkle = viewChild.required<ElementRef>('sparkle');
  animateInterval?: NodeJS.Timeout;

  private readonly platform = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platform)) {
      this.startAnimation();
    }
  }

  startAnimation() {
    let angle = 0;
    let amplitude = 3;
    let sparkleEl = this.sparkle().nativeElement;

    interval(40)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        angle += 0.2;
        const y = Math.sin(angle) * amplitude;
        const scale = 1 + Math.sin(angle * 2) * 0.1;
        sparkleEl.style.transform = `translateY(${y}px) scale(${scale})`;
      });
  }

}
