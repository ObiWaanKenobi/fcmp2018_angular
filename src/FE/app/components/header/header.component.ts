import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Config } from '../../utils/config';
import { SourceService } from '../../services/source.service';
import { HeaderService } from '../../services/header.service';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  private currentSource: string;
  private sourceTitle: string;
  private currentRoute: string;
  private isCustomArticles: boolean = false;
  private currentSourceId: string;
  private sources: any[];

  constructor(
    private sourceService: SourceService,
    private headerService: HeaderService,
    private articleService: ArticleService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    this.sourceService.getSources().subscribe(({sources}) => this.sources = sources);
  }

  ngAfterContentChecked() {
    this.currentRoute = this.location.path();
  }

  onAddNew() {
    this.articleService.setCurrentArticle({});
    this.router.navigate(['/add-article']);
  }

  onSourceChange(source: string) {
    this.sourceTitle = this.currentSource;
    this.currentSourceId = this.sources.find(s => source.includes(s.name)).id;
    this.headerService.changeSource(this.currentSourceId);
  }

  onFilterChange(filter: string) {
    this.headerService.changeFilter(filter);
  }

  showCustomArticles(value: boolean) {
    this.isCustomArticles = value ? true : false;
    this.currentSource = value ? 'My news' : this.sourceTitle;
    const source = value ? Config.baseLocalUrl : this.currentSourceId;
    this.headerService.changeSource(source)
  }

}
