import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Publicacion {
  id?: number;
  titulo: string;
  categoria: string;
  ubicacion: string;
  fecha: string;
  duracionHoras: number;
  duracionMinutos: number;
  monto: number;
  descripcion: string;
  publicadoPor: string;
  telefono?: string;      // ✅ nuevo campo
  token?: string; // 👈 Clave para validar publicación
}

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private apiUrl = environment.apiUrl + '/Publicaciones';

  constructor(private http: HttpClient) {}

  crearPublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.post<Publicacion>(this.apiUrl, publicacion);
  }

  obtenerPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.apiUrl);
  }
}
