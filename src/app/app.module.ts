import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { MosotrosComponent } from './mosotros/mosotros.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
@NgModule({
  declarations: [
    AppComponent,
    MultimediaComponent,
    MosotrosComponent,
    HorariosComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
