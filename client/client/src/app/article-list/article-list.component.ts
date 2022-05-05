import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles = undefined;
  art: any = {};
  app = undefined;
  constructor(private artService: ArticleService) {
    console.log("Calling backend:");
    let self = this;
    this.artService.getExternalArticles().subscribe(result => {
      console.log("Result:", result);
      self.articles = result;
    });
  }

  ngOnInit(): void {
  }

}
