import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user-info';
import { PhotoItem } from '../models/photo-item';
import { CommentItem } from '../models/comment-item';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private readonly baseUrl: string;
  private readonly token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.token = environment.token;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getPhotos(): Observable<PhotoItem[]> {
    return this.http.get<PhotoItem[]>(`${this.baseUrl}/photos`);
  }

  getComments(): Observable<CommentItem[]> {
    return this.http.get<CommentItem[]>(`${this.baseUrl}/comments`);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }

  updatePost(post: Post, id: number): Observable<any> {
    const body = JSON.stringify(post);
    const token = this.token;
    let headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return this.http.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      body,
      { headers: headers, responseType: 'json' }
    );
  }
}
