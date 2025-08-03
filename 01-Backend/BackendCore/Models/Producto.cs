using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendCore.Models
{
    [Table("Productos")] // <- Aquí se mapea con la tabla real en SQL Server
    public class Producto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Categoria { get; set; }
        public string Codigo { get; set; }
        public decimal Precio { get; set; }
        public int Stock { get; set; }
        public string Proveedor { get; set; }
        public string Ubicacion { get; set; }
        public DateTime? FechaIngreso { get; set; }
        public string? Descripcion { get; set; }
        public string? ImagenUrl { get; set; }
    }
}
