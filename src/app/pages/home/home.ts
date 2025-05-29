import { Component } from '@angular/core';
import { Large } from '../../components/large/large';

@Component({
  selector: 'app-home',
  imports: [Large],
  template: '<app-large />',
  styleUrl: './home.css'
})
export class Home {

}
