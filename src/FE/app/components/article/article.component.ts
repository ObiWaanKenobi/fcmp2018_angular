import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../../utils/config';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() public article: Article;

  constructor(
    private router: Router,
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
  }

  onArticleEdit() {
    this.articleService.setCurrentArticle(this.article);
    this.router.navigate(['/edit-article']);
  }

  onDelete() {
    this.articleService.deleteArticle(`${Config.articleLocalUrl}/${this.article._id}`).subscribe(res => res);
    window.location.reload();
  }

}
