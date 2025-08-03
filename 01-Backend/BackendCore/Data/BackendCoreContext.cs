using Microsoft.EntityFrameworkCore;
using BackendCore.Models;

namespace BackendCore.Data
{
    public class BackendCoreContext : DbContext
    {
        public BackendCoreContext(DbContextOptions<BackendCoreContext> options)
            : base(options)
        {
        }
        public DbSet<Producto> Productos { get; set; } // Mapea la tabla Products
    }
}
