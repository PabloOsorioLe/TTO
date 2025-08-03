import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },

  { path: 'productos', component: ProductosComponent, data: { animation: 'ProductosPage' } },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  { path: '**', redirectTo: '/productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
