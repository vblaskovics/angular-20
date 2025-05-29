import { Component } from '@angular/core';

@Component({
  selector: 'app-large',
  imports: [],
  templateUrl: './large.html',
  styleUrl: './large.css',
})
export class Large {
  items = Array.from({ length: 5000 }).map((_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `This is the description for item number ${i}. It is a longer text to simulate real content.`,
  }));

  heavyCalculation(num: number): number {
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += Math.sqrt(num * i);
    }
    return result;
  }
}
