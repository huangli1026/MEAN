import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseTitleComponent } from './course-title/course-title.component';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTitleComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
