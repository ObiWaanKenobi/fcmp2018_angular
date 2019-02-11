import { Component, OnInit } from '@angular/core';
import { SourceService } from '../../services/source.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private currentSource: string;
  private sources: string[];

  constructor(
    private sourceService: SourceService
  ) { }

  ngOnInit() {
    this.sources = this.sourceService.getSources();
  }

}
