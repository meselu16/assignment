import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

   getExternalArticles() {
     return this.http.get(environment.apiUrl + "article");
  }

  getAbstract(id) {

    return this.http.get(environment.externalBaseURL + id);
  }
}
