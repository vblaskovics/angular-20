import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-large',
  imports: [Card],
  template: `<h3>Large Component Loaded</h3>
    <section>
      @for (item of items.slice(0, 200); track $index) {
        <app-card [name]="item.name" [description]="item.description" />
      }
    </section>`,
  styles: `
    section {
      max-height: 600px;
      overflow-y: auto;
    }
  `,
})
export class Large {
  items = Array.from({ length: 5000 }).map((_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `This is the description for item number ${i}. It is a longer text to simulate real content.`,
  }));

}
