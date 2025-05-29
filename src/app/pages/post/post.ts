import { Component } from '@angular/core';
import { Large } from "./components/large/large";

@Component({
  selector: 'app-post',
  imports: [Large],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {

}
