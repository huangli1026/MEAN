import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorWidgetComponent } from './calculator-widget/calculator-widget.component';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent,
    CalculatorWidgetComponent,
    
    ],
  imports: [
    BrowserModule,
    FormsModule, //input field binding to component field, for two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent],  //remove AppComponent to change the bootstrap start point
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const calculatorWidget=createCustomElement(CalculatorWidgetComponent, {injector: this.injector});
    customElements.define('calculator-widget', calculatorWidget);
  }
   
  ngDoBootstrap(appRef: ApplicationRef): void {
    
  }
}
