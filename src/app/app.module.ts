import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { HomeComponent } from './home/home.component';
import { WordService } from './word.service';
import { DetailsComponent } from './details/details.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, WordComponent, HomeComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [WordService],
  bootstrap: [AppComponent],
})
export class AppModule {}
