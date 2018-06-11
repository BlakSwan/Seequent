import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { ColorPickerComponent } from './color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
