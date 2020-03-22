using System;
using Microsoft.AspNetCore.Mvc;
using Rental.Models;
using System.Collections.Generic;
using System.Linq;

namespace Rental.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext dbContext;
        public CatalogController(DataContext context) {
            this.dbContext = context;
        }
        public IActionResult Index(){
            return View();
        }
        
        public IActionResult Register(){
            return View();
        }

        [HttpPost]
        public IActionResult SaveCar([FromBody] Car theCar){
            Console.WriteLine("User is saving a car");
            Console.WriteLine(theCar.Make);

            // logic to save the car into the database

            dbContext.Cars.Add(theCar);
            dbContext.SaveChanges(); // commit the changes to DB

            return Json(theCar);
        }

        [HttpGet]
        public IActionResult GetCatalog(){
            var list = dbContext.Cars.ToList(); // retrieve all records from Car Table
            return Json(list);

        }

    }

}