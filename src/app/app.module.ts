import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FinanceModule } from './finance/finance.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FinanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
