import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación de las páginas activas
import { ReservarTransporteComponent } from './pages/reservar-transporte/reservar-transporte.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { BotonEmergenciaComponent } from './pages/boton-emergencia/boton-emergencia.component';
import { TourComponent } from './pages/tour/tour.component';

const routes: Routes = [
  { path: '', redirectTo: 'reservar-transporte', pathMatch: 'full' },

  { path: 'reservar-transporte', component: ReservarTransporteComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: 'boton-emergencia', component: BotonEmergenciaComponent },
  { path: 'tour', component: TourComponent },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  { path: '**', redirectTo: 'reservar-transporte' } // ruta fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
