import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { HighLightDirective } from './directives/high-light.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TagComponent,
    PopularTagsComponent,
    HighLightDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TagComponent,
    PopularTagsComponent,
    HighLightDirective,
    TruncatePipe,
    HttpClientModule
  ]
})
export class SharedModule { }
