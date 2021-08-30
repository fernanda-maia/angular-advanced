import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { MaterialModule } from './shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    LoginModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
