import { Component } from '@angular/core';
import { Large } from '../../components/large/large';

@Component({
  selector: 'app-hydrate',
  imports: [Large],
  template: `<h1>No hydrate</h1>
    <p>
      No hydration here.
    </p>
    @defer {
      <app-large />
    } @placeholder {
      <div>Large component placeholder</div>
    } `,
})
export class HydrateNo {}
