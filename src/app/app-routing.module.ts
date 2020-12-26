import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesPageComponent} from './pages/courses-page/courses-page.component';
import {LearningPageComponent} from './pages/learnings-page/learning-page.component';
import {TemplatesPageComponent} from './pages/templates-page/templates-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesPageComponent},
  {path: 'learnings', component: LearningPageComponent},
  {path: 'templates', component: TemplatesPageComponent},
  {path: 'about', component: AboutPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
