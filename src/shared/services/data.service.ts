import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Article, Articles, Tags } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API = 'https://api.realworld.io/api/';
  constructor(private http: HttpClient) { }

  getTags(): Observable<string[]> {
    return this.http.get<Tags>(`${this.API}tags`).pipe(map(res => res.tags));
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Articles>(`${this.API}articles?limit=10&offset=0`).pipe(
      map(res => res.articles),
      tap(res => res.forEach(article=>article.title = `${article.title} by Valeriy Ostapchenko`)),);
  }
}
