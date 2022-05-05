import { Component } from '@angular/core';
import { ArticleService } from "./service/article.service"
import { Article } from './model/Article';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'client';
  
}
