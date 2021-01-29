// Code for the array of cars
var car = [];

//Class for cars, takes in a name, image, description, and price
class Cars{
    constructor(name, img, description, price){
        this.name = name;
        this.img = img;
        this.description = description;
        this.price = price;
    }
}

//This function creates cars with the aboves class and puts them into the array
function createCar(name, img, description, price){
    car.push(new Cars(name, img, description, price));
}

// Code for gallery page

// code that adds the car to the entry list
function addCarListEntry(entry){
    document.getElementById("carList").innerHTML += 
    '<div id="carListItem" onclick="changeCurrentEntry('+ entry + ')">'+
'                <table style="border: none; height: 100%; background-color: unset;">'+
'                    <tr style="height: 100%;">'+
'                        <td style="width: 50%; vertical-align: middle;"><img src="images/' + car[entry].img + '" width="100%"></td>'+
'                        <td style="width: 50%;">'+ car[entry].name +'</td>'+
'                    </tr>'+
'                </table>'+
'            </div>';
}
// function that changes the currently viewing hearse 
function changeCurrentEntry(entry){
    document.getElementById("carDisplay").innerHTML =
    '<table style="border: none; width: 100%; height: 100%; background-color: unset;">'+
'                <tr>'+
'                    <td rowspan="2" style="text-align:center;"><img src="images/' + car[entry].img + '" height="50%"></td>'+
'                    <td style="vertical-align: bottom;"><h2>'+ car[entry].name +'</h2></td>'+
'                </tr>'+
'                <tr>'+
'                    <td style="vertical-align: top; width: 30%;"><p>'+ car[entry].description +'</p></td>'+
'                </tr>'+
'            </table>';
}
// this is ran when the gallery page is loaded, puts each item into the entry list
function setUpGallery(){
    for(i = 0; i < car.length; i+=2){
        addCarListEntry(i);
    }
}

// Code for the market page

// This just adds a market entry to the main div
function addMarketItem(entry){
    document.getElementById("shop").innerHTML +=
    '<div class="shopItem">'+
'            <table style="border: none; text-align: center; width: 100%; height: 20rem; background-color: #8C4E03; margin: 1rem;">'+
'                <tr style="height: 80%;">'+
'                    <td><img src="images/' + car[entry].img + '" width="85%"></td>'+
'                </tr>'+
'                <tr style="height: 10%;">'+
'                    <td>'+
'                        '+ car[entry].name +'<br>'+
'                        $'+ car[entry].price +
'                    </td>'+
'                </tr>'+
'                <tr style="height: 10%;">'+
'                    <td><button type="button">Contact Owner</button></td>'+
'                </tr>'+
'            </table>'+
'        </div>';
}
// ran when market page is loaded, puts all hearses into the market
function setUpMarket(){
    for(var i = 1; i < car.length; i+=2){
        addMarketItem(i);
    }
}

// Creation of the cars
createCar("Hot Hearse", "hearse1.jpg", "Wanna go out in style, then go out with a bang from the exhaust pipe",10000);
createCar("Modern hearse", "hearse2.jpg", "The modern high end hearse, meant for those who are to elegant and full of themselves to go out any other way ",10000);
createCar("Classic hearse", "hearse3.jpg", "You an old timer, than go out the old, the 80’s way",10000);
createCar("Dodge hearse", "hearse4.jpg", "Meant for those who drives dodge, the people who just don’t care and rear end every other car",10000);
//createCar("Sleek hearse", "hearse5.jpg", "No different from short hearse except that its longer",10000);
createCar("Submarine Hearse", "hearse6.jpg", "you a fish lover, r wanna feed sharks, this submarine hearse is your best choice",10000);
createCar("Boat hearse", "hearse7.jpg", "Want your body to be pecked by seagulls, or for you to smell the salty air even though you're dead, this is your choice",10000);
createCar("Short hearse", "hearse8.jpg", "Are you short", 9999);
createCar("Beach hearse", "hearse9.jpg", "Offroading bro",10000);
createCar("twin hearse", "hearse10.jpg", "Did twin or 2 people die at once the double hearse package is here for you",10000);
createCar("Wagon hearse", "hearse11.jpg", "Are you a chump you says cars are lame, this one's for you",10000);
createCar("limo hearse","hearse12.jpg", "wanna block traffic",10000);
createCar("Monster truck hearse","hearse13.jpg", "You feel the need for absolute deeds to destroy",10000);
createCar("Ghostbuster hearse","hearse14.jpg", "Who you gonna call, grave mistake",10000);
createCar("Tank hearse","hearse15.jpg", "Absolute destruction, military or otherwise",10000);