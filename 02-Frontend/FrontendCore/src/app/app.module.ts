import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Componentes reutilizables
import { NavbarComponent } from './components/navbar/navbar.component';

// Componentes de páginas
import { ReservarTransporteComponent } from './pages/reservar-transporte/reservar-transporte.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { BotonEmergenciaComponent } from './pages/boton-emergencia/boton-emergencia.component';
import { TourComponent } from './pages/tour/tour.component';

// Componentes de autenticación
import { LoginComponent } from './auth/login/login.component';

// Módulo de autenticación
import { AuthModule } from './auth/auth.module';

// Angular Material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

// Flatpickr
import { FlatpickrModule } from 'angularx-flatpickr';

// PWA
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReservarTransporteComponent,
    MisReservasComponent,
    BotonEmergenciaComponent,
    TourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule, // Para routerLink y routerLinkActive

    // Angular Material
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,

    // Flatpickr
    FlatpickrModule.forRoot(),

    // PWA
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
