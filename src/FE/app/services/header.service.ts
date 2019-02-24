import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private articleSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private articleFilter: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  public changeSource(source: string) {
    this.articleSource.next(source);
  }

  public changeFilter(filter: string) {
    this.articleFilter.next(filter);
  }

  public getSource() {
    return this.articleSource;
  }

  public getFilter() {
    return this.articleFilter;
  }
}
