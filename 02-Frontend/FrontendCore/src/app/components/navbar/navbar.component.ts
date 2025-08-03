import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() tituloActual: string = '';
  iconoActual: string = '';
  loginForm: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private eRef: ElementRef
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const ruta = this.router.url;

        if (ruta.includes('/reservar-transporte')) {
          this.tituloActual = 'Reservar Transporte';
          this.iconoActual = 'bi-car-front';
        } else if (ruta.includes('/mis-reservas')) {
          this.tituloActual = 'Mis Reservas';
          this.iconoActual = 'bi-journal-text';
        } else if (ruta.includes('/boton-emergencia')) {
          this.tituloActual = 'Emergencia';
          this.iconoActual = 'bi-exclamation-triangle-fill';
        } else if (ruta.includes('/tour')) {
          this.tituloActual = 'Tour';
          this.iconoActual = 'bi-globe-americas';
        } else {
          this.tituloActual = 'Inicio';
          this.iconoActual = 'bi-house-fill';
        }
      });
  }

  cerrarSesion(event: Event): void {
    event.preventDefault();
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
      }
    });
  }

  cerrarMenu(): void {
    const element = document.getElementById('navbarNav');
    if (element && element.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(element) || new bootstrap.Collapse(element, { toggle: false });
      bsCollapse.hide();
    }
  }

  toggleMenu(): void {
    const element = document.getElementById('navbarNav');
    if (element) {
      const bsCollapse = bootstrap.Collapse.getInstance(element) || new bootstrap.Collapse(element, { toggle: false });
      if (element.classList.contains('show')) {
        bsCollapse.hide();
      } else {
        bsCollapse.show();
      }
    }
  }

  abrirModal(event: Event): void {
    event.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          bootstrap.Modal.getInstance(document.getElementById('loginModal'))?.hide();
          this.router.navigate(['/reservar-transporte']);
        },
        error: () => {
          Swal.fire('Error', 'Credenciales incorrectas', 'error');
        }
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const clickedInside = this.eRef.nativeElement.contains(event.target);
    const navbarElement = document.getElementById('navbarNav');

    if (!clickedInside && navbarElement?.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarElement) || new bootstrap.Collapse(navbarElement, { toggle: false });
      bsCollapse.hide();
    }
  }
}
