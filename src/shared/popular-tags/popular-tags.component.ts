import { Component, OnInit,EventEmitter, Output, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularTagsComponent implements OnInit {

  public title: string | undefined;

  @Input()
  public titles: string[] | null = [];


  @Output() selectTag: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public sendSelectTag(value:string): void {
  this.title = value;
  this.selectTag.emit(value);
 }


}
