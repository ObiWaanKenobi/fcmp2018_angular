import { Component, OnInit, OnChanges } from '@angular/core';
import { SourceService } from '../../services/source.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  private currentSource: string;
  private sources: string[];
  private isEditMode = false;
  private isAddMode = false;

  constructor(
    private sourceService: SourceService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    this.isEditMode = this.location.path() === '/edit-article';
    this.isAddMode = this.location.path() === '/add-article';
    this.sources = this.sourceService.getSources();
  }

  ngOnChanges() {
    console.log('change');
  }

  onAddNew() {
    this.isAddMode = true;
    this.router.navigate(['/add-article']);
  }

}
