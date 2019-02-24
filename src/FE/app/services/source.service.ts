import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

const sourcesUrl = 'https://newsapi.org/v2/sources?apiKey=588d8657fc3b48618e0eaae78d639432';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor(
    private restApiService: RestApiService,
  ) { }

  getSources() {
    return this.restApiService.get(sourcesUrl);
  }
}
