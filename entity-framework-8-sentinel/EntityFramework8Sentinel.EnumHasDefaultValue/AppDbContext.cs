﻿using Microsoft.EntityFrameworkCore;

namespace EntityFramework8Sentinel.EnumHasDefaultValue
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
                .HasDefaultValue(ClientStatus.Inactive);
        }
    }
}