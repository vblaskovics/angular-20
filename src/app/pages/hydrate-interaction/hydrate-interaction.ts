import { Component } from '@angular/core';
import { Large } from '../../components/large/large';

@Component({
  selector: 'app-hydrate-interaction',
  imports: [Large],
  template: `<h1>hydrate on interaction</h1>
    <p>
      The hydrate on interaction trigger loads the deferrable view's dependencies and hydrates the content when the user
      interacts with the specified element through click or keydown events.
    </p>
    @defer (hydrate on interaction) {
      <app-large />
    } @placeholder {
      <div>Large component placeholder</div>
    } `,
})
export class HydrateInteraction {}
