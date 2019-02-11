import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private sources = ['BBC', 'Telegraph', 'Times', 'The Sun', 'Associated Press', 'Bild', 'Spiegel', 'IGN', 'Marca', 'Metro'];

  constructor() { }

  getSources(): string[] {
    return this.sources;
  }
}
