import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { DataService } from 'src/shared/services/data.service';
import { Article } from 'src/shared/types';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  public tags! : Observable<string[]>;
  public selectTag!: string;
  public date : string[] = [Date(), Date(), Date()];
  public articles! : Observable<Article[]>;
  ngOnInit(): void {
    forkJoin([
      this.tags = this.dataservice.getTags(),
      this.articles = this.dataservice.getArticles()
    ])
  }

  constructor(private dataservice: DataService){}

  public selectedTag(value: string){
    this.selectTag = value;
  }
}
