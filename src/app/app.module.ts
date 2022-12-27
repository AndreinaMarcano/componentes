import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { LandingModule } from './pages/landing/landing.module';
import { FooterModule } from './components/footer/footer.module';
import { BodyModule } from './components/body/body.module';
import { ListaEstudianteComponent } from './components/lista-estudiante/lista-estudiante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudianteComponent,
    FormsComponent
    
  ],
  imports: [
    BrowserModule,
    LandingModule,
    HeaderModule,
    BodyModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
