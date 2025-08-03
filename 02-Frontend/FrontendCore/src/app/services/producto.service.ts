import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // importa environment

export interface Producto {
  id?: number;
  nombre: string;
  categoria: string;
  codigo: string;
  precio: number;
  stock: number;
  proveedor: string;
  ubicacion: string;
  fechaIngreso: string;
  descripcion?: string;
  imagenUrl?: string; // <-- esta es la clave
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = environment.apiUrl + '/productos';  
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
}
