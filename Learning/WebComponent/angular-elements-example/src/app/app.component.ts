import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CourseTitleComponent } from './course-title/course-title.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'angular-elements-example';
  // constructor(private injector: Injector){

  // }

  // ngOnInit(): void {
  //   const htmlElement=createCustomElement(CourseTitleComponent, {injector: this.injector});

  //   customElements.define("course-title", htmlElement);
  // }

  content: SafeHtml | undefined;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('my-alert', AlertElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml("<my-alert message='Rendered dynamically'></my-alert>");
    }, 1000);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
