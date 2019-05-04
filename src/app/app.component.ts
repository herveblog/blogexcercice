import { Component } from '@angular/core';
import { Post } from './model/post'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: any;

  constructor() {
  	this.posts = [
  		new Post('Premier post', 'contenu du premier post', 0),
      	new Post('Deuxième post', 'contenu du deuxième post', 5),
      	new Post('Troisième post', 'contenu du troisième post', 2),
      	new Post('Quatrième post', 'contenu du quatrième post', 25),
        new Post('A post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 0),
        new Post('A post 2', 'contenu du post', -5),
        new Post('A post 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', -1)
    ];
  } 
}
