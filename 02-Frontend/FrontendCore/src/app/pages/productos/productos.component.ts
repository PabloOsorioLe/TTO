import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService, Producto } from '../../services/producto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productoForm: FormGroup;
  productos: Producto[] = [];
  proveedores: string[] = ['Proveedor A', 'Proveedor B', 'Proveedor C'];

  imagenPreview: string | null = null;
  imagenFile: File | null = null;

  camposCompactos = [
    { label: 'Categoría', control: 'categoria', tipo: 'text' },
    { label: 'Código', control: 'codigo', tipo: 'text' },
    { label: 'Precio', control: 'precio', tipo: 'number' },
    { label: 'Stock', control: 'stock', tipo: 'number' },
    { label: 'Ubicación', control: 'ubicacion', tipo: 'text' }
  ];

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['General'],
      codigo: ['SIN-CODIGO'],
      precio: [990, [Validators.min(0)]],
      stock: [1, [Validators.min(0)]],
      proveedor: ['Proveedor A'],
      ubicacion: ['Bodega'],
      fechaIngreso: [new Date().toISOString().substring(0, 10)], // YYYY-MM-DD
      descripcion: ['Producto sin descripción']
    });

  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al obtener productos', err)
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.imagenFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  getHoyISO(): string {
    return new Date().toISOString().substring(0, 10);
  }
  agregarProducto(): void {
    if (this.productoForm.valid) {
      const productoData: Producto = {
        ...this.productoForm.value,
        imagenUrl: this.imagenPreview || undefined // si usarás la imagen luego
      };

      this.productoService.agregarProducto(productoData).subscribe({
        next: (nuevo) => {
          this.obtenerProductos(); // recarga tabla
          this.productoForm.reset({
            nombre: '',
            categoria: 'General',
            codigo: 'GEN-001',
            precio: 1000,
            stock: 1,
            proveedor: 'Proveedor A',
            ubicacion: 'Bodega Central',
            fechaIngreso: this.getHoyISO(),
            descripcion: ''
          });
          this.imagenPreview = null;
          this.imagenFile = null;

          // ✅ Mostrar alerta
          Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 1000
          });
        },
        error: (err) => console.error('Error al guardar producto', err)
      });

    }
  }
}
