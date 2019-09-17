import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { ContorllerComponent } from './contorller/contorller.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputComponent,
    ContorllerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
