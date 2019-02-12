import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EditArticlePageComponent } from './pages/edit-article-page/edit-article-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  {
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
  },
  { path: 'edit-article', component: EditArticlePageComponent },
  { path: 'add-article', component: EditArticlePageComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
