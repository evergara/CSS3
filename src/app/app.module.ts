import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectoresCombinadoresComponent } from './components/selectores-combinadores/selectores-combinadores.component';
import { SelectoresAtributosComponent } from './components/selectores-atributos/selectores-atributos.component';
import { SelectoresBasicosComponent } from './components/selectores-basicos/selectores-basicos.component';
import { BoxModelComponent } from './components/box-model/box-model.component';
import { ElementCSSComponent } from './components/element-css/element-css.component';
import { EspecificidadCSSComponent } from './components/especificidad-css/especificidad-css.component';
import { BorderInitialComponent } from './components/border-initial/border-initial.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectoresCombinadoresComponent,
    SelectoresAtributosComponent,
    SelectoresBasicosComponent,
    BoxModelComponent,
    ElementCSSComponent,
    EspecificidadCSSComponent,
    BorderInitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
