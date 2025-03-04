using EF8Sentinel.Models;
using Microsoft.EntityFrameworkCore;

namespace EF8Sentinel.Db
{
    public class AppDbContext : DbContext
    {
        public DbSet<UserAccount> UserAccounts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("TestDb");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserAccount>()
                .Property(t => t.Status)
                .HasDefaultValue(StatusType.Inactive);
        }
    }
}