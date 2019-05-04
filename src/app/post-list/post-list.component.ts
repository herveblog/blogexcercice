import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from '../model/post'; 

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  @Input() posts: any;

  constructor() { }

  ngOnInit() {
  }

}
