import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/Article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private artService: ArticleService, private route: ActivatedRoute) {}
  article: any;

  getAbstract(id) {
    
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');
    this.artService.getAbstract(id).subscribe((result: Article) => {
      this.article = result;
    })
  }

}
