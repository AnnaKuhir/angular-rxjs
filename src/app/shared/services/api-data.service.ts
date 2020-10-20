import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user-info';
import { PhotoItem } from '../models/photo-item';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getPhotoItem(): Observable<PhotoItem[]> {
    return this.http.get<PhotoItem[]>(`${this.baseUrl}/photos`);
  }
}
