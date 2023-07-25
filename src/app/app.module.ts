import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent, // ?
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,

    // Internal modules
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
