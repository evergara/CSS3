import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectoresCombinadoresComponent } from './components/selectores-combinadores/selectores-combinadores.component';
import { SelectoresAtributosComponent } from './components/selectores-atributos/selectores-atributos.component';
import { SelectoresBasicosComponent } from './components/selectores-basicos/selectores-basicos.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectoresCombinadoresComponent,
    SelectoresAtributosComponent,
    SelectoresBasicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
