import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  async getIds(): Promise<string[]> {
    return ['1', '2', '3'];
  }
}
