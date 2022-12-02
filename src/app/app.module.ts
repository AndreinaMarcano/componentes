import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { LandingModule } from './pages/landing/landing.module';
import { FooterModule } from './components/footer/footer.module';
import { BodyModule } from './components/body/body.module';
import { ListaEstudianteComponent } from './components/lista-estudiante/lista-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    LandingModule,
    HeaderModule,
    BodyModule,
    FooterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
