using A.EnumHasDefaultValue.Models;
using Microsoft.EntityFrameworkCore;

namespace A.EnumHasDefaultValue.Db
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