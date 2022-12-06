import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';

import { SharedModule } from 'src/shared/shared.module';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FeedComponent,
    FeedItemComponent,
    LoginComponent,
    RegisterComponent,
    NewArticleComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    FeedComponent,
    FeedItemComponent,
    LoginComponent,
    RegisterComponent,
    NewArticleComponent,
    SettingsComponent,
    ProfileComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FeatureModule { }
