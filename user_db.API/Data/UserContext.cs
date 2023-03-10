using Bogus;
using Microsoft.EntityFrameworkCore;
using user_db.API.Models;

namespace user_db.API.Data;

public class UserContext : DbContext
{
    public UserContext(DbContextOptions<UserContext> options)
        : base(options)
    {
    }
    
    public DbSet<user_db.API.Models.User> User { get; set; } = default!;
    public DbSet<user_db.API.Models.Address> Address { get; set; } = default!;
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var ids = 1;
        var fakeUser = new Faker<User>()
            .RuleFor(m => m.Id, f => ids++)
            .RuleFor(m => m.Name, f => f.Name.FullName())
            .RuleFor(m => m.Email, (f,m) => f.Internet.Email(m.Name))
            .RuleFor(m => m.Age, f => f.Random.Number(0,100));
        
        var addressIds = 1;
        var fakeAddress = new Faker<Address>()
            .RuleFor(m => m.Id, f => addressIds++)
            .RuleFor(m => m.Street, f => f.Address.StreetName())
            .RuleFor(m => m.StreetNo, f => f.Random.Number(1,50))
            .RuleFor(m => m.City, f => f.Address.City())
            .RuleFor(m => m.Country, f => f.Address.Country())
            .RuleFor(m => m.UserId, f => f.Random.Number(ids));
    
        // generate 100 items
        modelBuilder
            .Entity<User>()
            .HasData(fakeUser.GenerateBetween(100, 100));
        
        modelBuilder
            .Entity<Address>()
            .HasData(fakeAddress.GenerateBetween(300, 300));
    }
}