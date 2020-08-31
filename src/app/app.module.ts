import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ValidateComponent } from './validate/validate.component';
import { ReboServicesService } from './services/rebo-services.service'

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ValidateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ReboServicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
