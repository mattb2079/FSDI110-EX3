function Car(make, model, year, dailyPrice, cylinders, passengers, type, imageUrl, description, fuelType){
    this.make = make;
    this.model = model;
    this.year = year;
    this.dailyPrice = dailyPrice;
    this.cylinders = cylinders;
    this.passengers = passengers;
    this.type = type;
    this.imageUrl = imageUrl;
    this.description = description;
    this.fuelType = fuelType;

    //-------------
}

function saveCar(){
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var dailyPrice = $("#txtDailyPrice").val();
    var cylinders = $("#txtCylinders").val();
    var passengers = $("#txtPassengers").val();
    var type = $("#txtType").val();
    var imageUrl = $("#txtImageUrl").val();
    var description = $("#txtDescription").val();
    var fuelType = $("#txtFuelType").val();
    console.log(make);
    console.log(model);
    console.log(year);
    console.log(dailyPrice);
    console.log(cylinders);
    console.log(passengers);
    console.log(type);
    console.log(imageUrl);
    console.log(description);
    console.log(fuelType);
    // Do the same fo all the controls on the form

    //-------------

    var newCar = new Car(make, model, year, dailyPrice, cylinders, passengers, type, imageUrl, description, fuelType);
    console.log(newCar);

    $.ajax({
        url: '/catalog/saveCar',
        type: "POST",
        data: JSON.stringify(newCar),
        contentType: "application/json",
        success: function (response){
            console.log("Server says ", response);
        },
        error: function (details){
            console.log("Error: ", details);
        }
    })
    

    clearForm();
}

function clearForm(){
    $("#txtMake").val("");
    $("#txtModel").val("");
    $("#txtYear").val("");
    $("#txtDailyPrice").val("");
    $("#txtCylinders").val("");
    $("#txtPassengers").val("");
    $("#txtType").val("");
    $("#txtImageUrl").val("");
    $("#txtDescription").val("");
    $("#txtFuelType").val("");

}

function init(){
    console.log("Register car page!!!!!")

    $("#btnSave").click(saveCar);
}

window.onload = init;