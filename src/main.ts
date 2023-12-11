import { enableProdMode, importProvidersFrom } from '@angular/core';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app/app.route';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule), provideRouter(appRoutes),]
})
  .catch(err => console.error(err));
