import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { SharedModule } from './shared/shared.module'

import { StoreService } from './services/store.service'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,

    // Internal modules
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    // Services
    StoreService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
