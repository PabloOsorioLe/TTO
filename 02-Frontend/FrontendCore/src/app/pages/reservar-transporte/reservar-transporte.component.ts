import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservar-transporte',
  templateUrl: './reservar-transporte.component.html',
  styleUrls: ['./reservar-transporte.component.css']
})
export class ReservarTransporteComponent implements OnInit {
  formReserva: FormGroup;
  tarifaFija: number = 0;

  constructor(private fb: FormBuilder) {
    this.formReserva = this.fb.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      tipoViaje: ['', Validators.required],
      tipoVehiculo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.formReserva.valueChanges.subscribe(values => {
      this.calcularTarifa(values);
    });
  }

  calcularTarifa(values: any): void {
  const base = 10000;

  const viajeMultiplicadores: { [key: string]: number } = {
    aeropuerto: 1.0,
    citytour: 1.2,
    viñedos: 1.5,
    roadtrip: 1.8
  };

  const vehiculoMultiplicadores: { [key: string]: number } = {
    sedan: 1,
    suv: 1.3,
    van: 1.5,
    premium: 2
  };

  const viajeKey = values.tipoViaje || '';
  const vehiculoKey = values.tipoVehiculo || '';

  const viajeMultiplicador = viajeMultiplicadores[viajeKey] ?? 1;
  const vehiculoMultiplicador = vehiculoMultiplicadores[vehiculoKey] ?? 1;

  this.tarifaFija = base * viajeMultiplicador * vehiculoMultiplicador;
}

formatearPesos(valor: number): string {
  return '$' + valor.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
  confirmar(): void {
    if (this.formReserva.valid) {
      // Aquí puedes integrar pago o redireccionar
      alert('Reserva confirmada. Total a pagar: $' + this.tarifaFija.toLocaleString('es-CL'));
    }
  }
}

