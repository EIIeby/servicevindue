import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServicevindueComponent } from './servicevindue/servicevindue.component';
import localeDa from '@angular/common/locales/da';

registerLocaleData(localeDa)

@NgModule({
  declarations: [
    AppComponent,
    ServicevindueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'da'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
