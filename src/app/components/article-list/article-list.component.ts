import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  private articles: Article[];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe((articles: any) => {
      console.log('articles', articles);
      this.articles = articles;
    });
  }
}
