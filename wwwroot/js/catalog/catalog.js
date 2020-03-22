
function fetchCatalog(){
    console.log("Fetching catalog");

    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function(res){
            console.log("from server", res);

            // TODO: sort the card (res array) to show cheapest first
            // res.sortByMagic(); maybe??
            var sorted = [];
            sorted = res.sort( function(left, right){
                if(parseFloat(left.dailyPrice) < parseFloat(right.dailyPrice)){
                    return -1; // the first param goes first
                }
                else if(right.dailyPrice < left.dailyPrice){
                    return 1;
                }
                return 0;
            });

            for (var i=0; i<sorted.length; i++){
                displayCar(res[i]);
            }
        },
        error: function(details){
            console.log("Error:", details);
        }
    })
}

function displayCar(car){

    console.log(car);
    var template = 
    `<div class="catalog">
        <div class="outerblock">
            <div class="itemtop">
                <h2>${car.make} ${car.model}</h2>
            </div>
            <div class="block">
                <img src='${car.imageUrl}'>
                <div class="blocktext">
                    <h5>Year</h5><p>${car.year}</p>
                    <h5>Rent</h5><p>$${car.dailyPrice}</p>
                </div>
            </div>
            <div class="lowerblock">
                <p>${car.description}</p>
                <button>Rent this car</button>
            </div>
        </div>
    </div>`;

    var container = $("#catalog");
    container.append(template);
    
}

function drawItem(item){
    // create the syntax

    var sntx =
    `<div class= 'item'>
    <img src='${item.image}'>

        <label class='code'>${item.code}</label>
        <label class='cat'>${item.category}</label>

        <label class='desc'>${item.description}</label>

        <label class='price'>$ ${(item.price * 1).toFixed(2)}</label>
        <button class = 'btn btn-sm btn-info'> + </button>

    </div>`;

    // get the element from the screen
    var container = $("#catalog");

    // append the syntax to the element
    container.append(sntx);
}

function init(){
    console.log("Catalog page!");

    fetchCatalog();
}

window.onload = init;