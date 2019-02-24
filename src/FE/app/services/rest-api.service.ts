import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient,
  ) {}

  public get(url: string) {
    return this.http.get(url).pipe(
      map((response: any) => response),
      catchError((error) => error)
    );
  }

  public post(url: string, body: any) {
    return this.http.post(url, body).pipe(
      map((response: any) => response),
      catchError((error) => error)
    );

  }

  public update(url: string, body: any) {
    return this.http.put(url, body).pipe(
      map((response: any) => response),
      catchError((error) => error)
    );
  }

  public delete(url: string) {
    return this.http.delete(url).pipe(
      map((response: any) => response),
      catchError((error) => error)
    );
  }
}
