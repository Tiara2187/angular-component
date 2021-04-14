import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServeComponent } from './serve/serve.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ServeComponent,
    HeaderComponent,
    FooterComponent,
    AlertSuccessComponent,
    AlertWarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
