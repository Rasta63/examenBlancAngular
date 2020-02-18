import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import {HttpClientModule} from '@angular/common/http';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussureComponent } from './components/edit-chaussure/edit-chaussure.component';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaussureComponent,
    AddChaussureComponent,
    EditChaussureComponent,
    ChaussureDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CommonModule,
    ToastrModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
