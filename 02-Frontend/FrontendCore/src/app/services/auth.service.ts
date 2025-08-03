import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioMock = {
    email: 'admin@fullpega.cl',
    password: '123456',
    nombre: 'Mauricio'
  };

  constructor(private router: Router) {}

  login({ email, password }: { email: string; password: string }): Observable<any> {
    if (email === this.usuarioMock.email && password === this.usuarioMock.password) {
      return of({ token: 'mock-token', usuario: this.usuarioMock.nombre }).pipe(
        delay(1000),
        tap((res) => {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('usuario', res.usuario);
        })
      );
    } else {
      return throwError(() => new Error('Credenciales inválidas'));
    }
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }

  getNombreUsuario(): string {
    return sessionStorage.getItem('usuario') || 'Usuario';
  }
}
