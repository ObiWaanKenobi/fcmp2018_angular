import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Config } from '../../utils/config';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  private form: FormGroup;
  private article: Article;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.articleService.getArticle().subscribe(article => this.article = article);
    this.form = this.formBuilder.group({
      title: [
        this.article.title, [Validators.required]
      ],
      description: [
        this.article.description, [Validators.required]
      ],
      content: [
        this.article.content, [Validators.required]
      ],
      urlToImage: [
        this.article.urlToImage, [Validators.required]
      ],
      publishedAt: [
        this.article.publishedAt, [Validators.required]
      ],
      author: [
        this.article.author, [Validators.required]
      ],
      source: [
        this.article.source, [Validators.required]
      ]
    });
  }

  onSubmit(form: FormGroup) {
    form.valid && this.saveArticle(form);
  }

  saveArticle(form: FormGroup) {
    this.router.url === Config.addArticleUrl
      ? this.articleService.saveArticle(Config.articleLocalUrl, form.value).subscribe(res => res)
      : this.articleService.editArticle(`${Config.articleLocalUrl}/${this.article._id}`, form.value).subscribe(res => res)
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
