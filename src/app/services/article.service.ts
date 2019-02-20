import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { map, catchError, delay } from 'rxjs/operators';
import { Article } from '../models/article';

export const Constants = {
  apiKey: '588d8657fc3b48618e0eaae78d639432',
  noImageUrl: 'https://www.classify24.com/wp-content/uploads/2017/04/no-image.png',
  sourcesUrl: 'https://newsapi.org/v2/sources',
  newsUrl: 'https://newsapi.org/v2/top-headlines',
};

const mockUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=588d8657fc3b48618e0eaae78d639432';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) { }

  // todo types
  getArticles() {
    return this.http.get(mockUrl).pipe(
      map((response: any) => response.articles),
      catchError((error) => error)
    );
  }
}
