import { Component, OnInit, Input } from '@angular/core';
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
  ) { }

  ngOnInit() {
  }

  onArticleEdit() {
    this.router.navigate(['/edit-article']);
  }

}
