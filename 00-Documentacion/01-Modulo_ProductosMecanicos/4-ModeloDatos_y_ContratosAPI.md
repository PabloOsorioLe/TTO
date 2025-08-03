Modelo entidad:
public class ProductoMecanico
{
    public int Id { get; set; }
    public string Codigo { get; set; }
    public string Nombre { get; set; }
    public string Tipo { get; set; } // Repuesto, Lubricante, Herramienta, Otro
    public decimal Stock { get; set; }
    public string UnidadMedida { get; set; } // Unidad, Litro, Kg
    public string? Descripcion { get; set; }
}

POST /api/productos
{
  "codigo": "MEC-1234",
  "nombre": "Aceite Hidráulico 10W",
  "tipo": "Lubricante",
  "stock": 25,
  "unidadMedida": "Litro",
  "descripcion": "Aceite especial para sistemas hidráulicos industriales."
}

Respuesta esperada:
{
  "mensaje": "Producto registrado correctamente",
  "id": 2025
}
