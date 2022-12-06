import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
  public editorForm! : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(8)]),
      description: new FormControl('', Validators.required),
      article: new FormControl('', [Validators.required, Validators.minLength(100)]),
      tags: new FormControl('', Validators.required)
    });
  }
  public publish(){
    console.log('Done')
  }
}
