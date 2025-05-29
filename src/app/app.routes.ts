import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { HydrateNo } from './pages/hydrate-no/hydrate-no';
import { Product } from './pages/product/product';
import { HydrateTimer } from './pages/hydrate-timer/hydrate-timer';
import { HydrateInteraction } from './pages/hydrate-interaction/hydrate-interaction';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: Home },
      { path: 'product/:id', component: Product },
      { path: 'hydrate-no', component: HydrateNo },
      { path: 'hydrate-timer', component: HydrateTimer },
      { path: 'hydrate-interaction', component: HydrateInteraction },
    ],
  },
];
