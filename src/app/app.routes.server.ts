import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProductService } from './pages/product/product.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const dataService = inject(ProductService);
      const ids = await dataService.getIds(); // ["1", "2", "3"]
      // `id` is used in place of `:id` in the route path.
      return ids.map((id) => ({ id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
