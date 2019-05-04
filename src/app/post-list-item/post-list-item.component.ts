import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from '../model/post'; 

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() 
  public a_post: Post;

  constructor() { }

  ngOnInit() {
  }

  onDontLoveIt() {
  	this.a_post.loveIts -= 1; 
  }

  onLoveIt() {
	this.a_post.loveIts += 1;
  }

}
