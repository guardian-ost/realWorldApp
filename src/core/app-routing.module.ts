import { NewArticleComponent } from './../feature/new-article/new-article.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from 'src/feature/feed/feed.component';
import { LoginComponent } from 'src/feature/login/login.component';
import { RegisterComponent } from 'src/feature/register/register.component';
import { SettingsComponent } from 'src/feature/settings/settings.component';
import { ProfileComponent } from 'src/feature/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: FeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'editor', component: NewArticleComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', redirectTo: 'home'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
