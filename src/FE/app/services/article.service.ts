import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/article';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private article: BehaviorSubject<Article> = new BehaviorSubject<Article>({} as Article);

  constructor(
    private restApiService: RestApiService,
  ) { }

  getArticles(url: string) {
    return this.restApiService.get(url);
  }

  saveArticle(url: string, body: any) {
    return this.restApiService.post(url, body);
  }

  editArticle(url: string, body: any) {
    return this.restApiService.update(url, body);
  }

  deleteArticle(url: string) {
    return this.restApiService.delete(url);
  }

  setCurrentArticle(article) {
    this.article.next(article);
  }

  getArticle() {
    return this.article;
  }
}
