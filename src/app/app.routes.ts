import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Post } from './pages/post/post';
import { Product } from './pages/product/product';
import { Test } from './pages/test/test';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: Home },
      { path: 'product/:id', component: Product },
      { path: 'post', component: Post },
      { path: 'test', component: Test },
    ],
  },
];
