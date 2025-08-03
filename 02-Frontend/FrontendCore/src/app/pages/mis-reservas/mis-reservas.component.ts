import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {
  reservas = [
    {
      id: 1,
      origen: 'Hotel Marriott',
      destino: 'Aeropuerto',
      fecha: '2025-08-02',
      vehiculo: 'SUV',
      tipoViaje: 'Aeropuerto',
      calificacion: 4
    },
    {
      id: 2,
      origen: 'Hotel Cumbres',
      destino: 'Viñedos',
      fecha: '2025-07-25',
      vehiculo: 'Van',
      tipoViaje: 'Tour',
      calificacion: 0
    }
  ];

  calificarReserva(reservaId: number, valor: number) {
    const reserva = this.reservas.find(r => r.id === reservaId);
    if (reserva) {
      reserva.calificacion = valor;
    }
  }

  repetirReserva(reserva: any) {
    // Aquí podrías redirigir al formulario de reserva y prellenarlo
    alert('🔁 Repitiendo la reserva');
    // Ejemplo: this.router.navigate(['/reserva'], { state: { data: reserva } });
  }
}
