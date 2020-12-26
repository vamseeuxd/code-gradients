import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LearningPageComponent } from './pages/learnings-page/learning-page.component';
import { TemplatesPageComponent } from './pages/templates-page/templates-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    LearningPageComponent,
    TemplatesPageComponent,
    AboutPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
