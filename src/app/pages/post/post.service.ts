import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  async getIds(): Promise<string[]> {
    return ['1', '2', '3'];
  }
}
