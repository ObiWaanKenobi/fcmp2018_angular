import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { fill } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    return fill(Array(10), {
      title: 'Article title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus a odio id aliquet. Sed finibus sodales ligula egestas volutpat. Vestibulum sagittis leo at lacinia convallis. Ut quis dolor libero. Sed egestas diam sem, ac viverra erat sodales vitae. Suspendisse aliquam efficitur nisi, id pulvinar augue. Nulla suscipit dui id luctus condimentum. Nullam consectetur commodo tortor a dignissim. Donec scelerisque porta erat, non semper nisi egestas nec. Morbi metus ligula, aliquet vitae eros at, vestibulum volutpat ligula. Proin at ipsum malesuada, aliquam enim id, consectetur libero. Duis ac neque dapibus, varius ex id, gravida justo. Sed sit amet turpis tellus.'
    });
  }
}
