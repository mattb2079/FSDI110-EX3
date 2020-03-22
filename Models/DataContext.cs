using Microsoft.EntityFrameworkCore;

namespace Rental.Models{

    /*
        this class will handle the connection to DB
        and helps to retrieve/store/update data

        if something changes on the models/tables, execute:
        - dotnet ef migrations and <someName>
        - dotnet ef database update
    */

    public class DataContext : DbContext {

public DataContext( DbContextOptions<DataContext> options) : base(options) {

        }

        // specify which models need to be converterd to DB tables
        public DbSet<Car> Cars {get; set;}

    }
}