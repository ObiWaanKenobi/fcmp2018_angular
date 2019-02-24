import { Component, OnInit } from '@angular/core';
import { Config } from '../../utils/config';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { HeaderService } from '../../services/header.service';

const getUrl = (source) => `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=588d8657fc3b48618e0eaae78d639432`;

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  private articles: Article[];
  private currentSource: string;

  constructor(
    private articleService: ArticleService,
    private headerService: HeaderService,
  ) { }
  
  ngOnInit() {
    this.headerService.getSource().subscribe(source => {
      this.currentSource = source;
      if (source) {
        source === Config.baseLocalUrl
          ? this.articleService.getArticles(Config.baseLocalUrl).subscribe((resp: any) => this.articles = resp)
          : this.articleService.getArticles(getUrl(source)).subscribe((resp: any) => this.articles = resp.articles);
      }
    });

    this.headerService.getFilter().subscribe(filter => {
      if (this.currentSource) {
        this.currentSource === Config.baseLocalUrl
          ? this.articleService.getArticles(Config.baseLocalUrl)
              .subscribe((resp: any) => this.articles = resp.filter(a => a.title.includes(filter) || a.description.includes(filter)))
          : this.articleService.getArticles(getUrl(this.currentSource))
              .subscribe((resp: any) => this.articles = resp.articles.filter(a => a.title.includes(filter) || a.description.includes(filter)));
      }
    });
  }
}
