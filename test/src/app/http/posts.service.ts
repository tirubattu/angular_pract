import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://jsonplaceholder.typicode.com';

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseUrl + '/posts').pipe(
      map(posts => {
        console.log('map 1 >>> ',posts);
        return posts.map((post:any) => {
          console.log('map 2 >>> ',post);
          return {
            title:post.title,
            post:post.body
          }
        });
      })
    )
  }
}

export interface IPost {
  title: string;
  post: string;
  id?:number;
}

