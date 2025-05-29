import { Component } from '@angular/core';
import { Large } from '../../components/large/large';

@Component({
  selector: 'app-hydrate-timer',
  imports: [Large],
  template: `<h1>hydrate on timer</h1>
    <p>
      The hydrate on timer trigger loads the deferrable view's dependencies and hydrates the content after a specified
      duration.
    </p>
    @defer (hydrate on timer(3000ms)) {
      <app-large />
    } @placeholder {
      <div>Large component placeholder</div>
    } `,
})
export class HydrateTimer {}
