import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IPost, PostsService } from './posts.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit, OnDestroy {
  constructor(private postsService: PostsService) {}

  posts!: IPost[];
  postSubscription!: Subscription;

  ngOnInit(): void {
    this.postSubscription = this.postSubscription = this.postsService
      .getPosts()
      .subscribe((posts) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postSubscription.unsubscribe();
  }
}
